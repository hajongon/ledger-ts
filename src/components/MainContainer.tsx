import React from "react";
import { StyledContainer } from "./styles/StyledContainer";
import PaymentForm from "./PaymentForm";
import PaymentList from "./PaymentList";
import DeleteTypes from "../types/DeleteTypes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPaymentInfo } from "@src/reducers/paymentInfoSlice";
const MainContainer: React.FC<DeleteTypes> = ({ deleteItem }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const data = localStorage.getItem("paymentInfo");
    if (data) {
      dispatch(setPaymentInfo(JSON.parse(data)));
    }
  }, [setPaymentInfo]);
  return (
    <StyledContainer>
      <PaymentForm deleteItem={deleteItem} />
      <PaymentList deleteItem={deleteItem} />
    </StyledContainer>
  );
};

export default MainContainer;
