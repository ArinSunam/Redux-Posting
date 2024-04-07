import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../features/posts/postSlice'
import usersReducer from "../features/users/userSlice";

export const store = configureStore({
  reducer: {
    post: postReducer,
    users: usersReducer
  }
})