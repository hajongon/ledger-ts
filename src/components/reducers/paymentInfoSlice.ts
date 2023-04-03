import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    name: "",
    amount: 0,
    date: "",
  },
];

const paymentInfoSlice = createSlice({
  name: "paymentInfo",
  initialState,
  reducers: {
    setPaymentInfo: (state, action) => {
      return action.payload;
    },
    deletePaymentInfo: (state, action) => {
      return state.filter((payment) => payment.id !== action.payload);
    },
  },
});

export default paymentInfoSlice;
