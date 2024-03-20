import { createSlice, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

// Define the interface for a Card
export interface Company {
  _id: string;
  name: string;
  assistantPhotoUrl: string;
  market: string;
  welcomeMessage: string;
}

interface Message {
  createdAt: number;
  content: string;
  role: "user" | "assistant";
  companyId: string;
}

// Define the interface for the state managed by this slice
interface MessagesState {
  companies: Company[];
  messages: Message[];
  isCompaniesLoading: boolean;
  selectedCompany?: string;
  identifier: string;
  isDarkMode: boolean;
}

// Define the initial state for this slice
const initialState: MessagesState = {
  companies: [],
  messages: [],
  isCompaniesLoading: true,
  identifier: uuidv4(),
  isDarkMode: false,
};

// Create a Redux slice for managing card data
const messagesSlice = createSlice({
  name: "messages", // Name of the slice
  initialState, // Initial state
  reducers: {
    // Reducer for updating cardDetails after a successful resource fetch
    getCompaniesSuccess(state, action) {
      state.companies = action.payload;
      state.isCompaniesLoading = false;
      state.selectedCompany = action.payload[0]._id;
      action.payload.map((company: Company) => {
        state.messages.push({
          createdAt: new Date().getTime(),
          content: company.welcomeMessage,
          role: "assistant",
          companyId: company._id,
        });
      });
    },
    setSelectedCompany(state, action: { payload: string }) {
      state.selectedCompany = action.payload;
    },
    addMessage(
      state,
      action: {
        payload: { content: string; role: Message["role"]; companyId: string };
      },
    ) {
      state.messages.push({
        createdAt: new Date().getTime(),
        content: action.payload.content,
        role: action.payload.role,
        companyId: action.payload.companyId,
      });
    },
    darkmodeToggler(state, action: { payload: boolean }) {
      const bodyEl = document.querySelector("body");
      if (bodyEl) {
        bodyEl.setAttribute("data-mode", action.payload ? "dark" : "light");
        state.isDarkMode = action.payload;
      }
    },
  },
});

// Export the action creator for getResourcesSuccess
export const {
  getCompaniesSuccess,
  setSelectedCompany,
  addMessage,
  darkmodeToggler,
} = messagesSlice.actions;

// Export the reducer
export default messagesSlice.reducer;

// Define an asynchronous action creator to fetch card resources from an API
export function getCompanies() {
  return async (dispatch: Dispatch) => {
    try {
      // Make an HTTP GET request to the API
      const response = await axios.get(`${process.env.GET_COMPANIES_API}`);

      // Extract card resources from the API response
      const resources: Company[] = response.data.companies;

      // Dispatch the getResourcesSuccess action to update the Redux state
      dispatch(getCompaniesSuccess(resources));
    } catch (error) {
      console.error("Error fetching company resources:", error);
    }
  };
}
