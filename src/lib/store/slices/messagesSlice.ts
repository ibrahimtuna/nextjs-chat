import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { User, Message } from "@/lib/store/slices/types";

// Define the interface for the state managed by this slice
interface MessagesState {
  users: User[];
  messages: Message[];
  isUsersLoading: boolean;
  selectedUser?: string;
  isDarkMode: boolean;
}

// Define the initial state for this slice
const initialState: MessagesState = {
  users: [],
  messages: [],
  isUsersLoading: true,
  isDarkMode: false,
};

// Create a Redux slice for managing card data
const messagesSlice = createSlice({
  name: "messages", // Name of the slice
  initialState, // Initial state
  reducers: {
    // Reducer for updating cardDetails after a successful resource fetch
    getUsersSuccess(state, action: PayloadAction<User[]>) {
      // add unique id for each user
      const usersWithUniqueId: User[] = [...action.payload].map((user) => ({
        ...user,
        id: uuidv4(),
      }));
      state.users = usersWithUniqueId;
      state.isUsersLoading = false;
      state.selectedUser = action.payload[0].id;
    },
    setSelectedUser(state, action: { payload: string }) {
      state.selectedUser = action.payload;
    },
    addMessage(
      state,
      action: {
        payload: { content: string; role: Message["role"]; userId: string };
      },
    ) {
      state.messages.push({
        createdAt: new Date().getTime(),
        content: action.payload.content,
        role: action.payload.role,
        userId: action.payload.userId,
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
export const { getUsersSuccess, setSelectedUser, addMessage, darkmodeToggler } =
  messagesSlice.actions;

// Export the reducer
export default messagesSlice.reducer;

// Define an asynchronous action creator to fetch card resources from an API
export function getUsers() {
  return async (dispatch: Dispatch) => {
    try {
      const USERS_ENDPOINT = process.env.GET_USERS_API as string;
      const response = await axios.get(USERS_ENDPOINT);
      const resources: User[] = response.data.results;

      // Dispatch the getUsersSuccess action to update the Redux state
      dispatch(getUsersSuccess(resources));
    } catch (error) {
      console.error("Error fetching users resources:", error);
    }
  };
}
