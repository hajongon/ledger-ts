import { createSlice, configureStore } from "@reduxjs/toolkit";

const filteredSlice = createSlice({
  name: "filtered",
  initialState: [
    {
      id: "1",
      name: "",
      amount: 0,
      date: "",
    },
  ],
  reducers: {
    setFiltered: (state, action) => {
      return action.payload;
    },
  },
});

export const { setFiltered } = filteredSlice.actions;

export default filteredSlice;
