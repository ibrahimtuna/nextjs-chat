import { combineReducers } from "redux";

// import slices
import messagesReducer from "./slices/messagesSlice";

const rootReducer = combineReducers({
  messages: messagesReducer,
});

export default rootReducer;
