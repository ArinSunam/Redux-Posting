import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '0', name: 'Meow' },
  { id: '1', name: 'Myau' },
  { id: '2', name: 'Biralo' }
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer