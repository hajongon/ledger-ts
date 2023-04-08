import { createSlice } from "@reduxjs/toolkit";

const paymentInfoSlice = createSlice({
  name: "paymentInfo",
  initialState: [
    {
      id: "1",
      name: "",
      amount: 0,
      date: "",
    },
  ],
  reducers: {
    setPaymentInfo: (state, action) => {
      return action.payload;
    },
    deletePaymentInfo: (state, action) => {
      console.log(action.payload);
      return state.filter((payment) => payment.id !== action.payload);
    },
  },
});

export const { setPaymentInfo, deletePaymentInfo } = paymentInfoSlice.actions;

export default paymentInfoSlice;
