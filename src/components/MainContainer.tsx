import React from "react";
import { StyledContainer } from "./styles/StyledContainer";
import PaymentForm from "./PaymentForm";
import PaymentList from "./PaymentList";
import PaymentInfoTypes from "./types/PaymentInfoTypes";



const MainContainer: React.FC<PaymentInfoTypes> = ({ paymentInfo, setPaymentInfo, deleteItem }) => {
  return (
    <StyledContainer>
      <PaymentForm paymentInfo={paymentInfo} setPaymentInfo={setPaymentInfo} deleteItem={deleteItem} />
      <PaymentList paymentInfo={paymentInfo} setPaymentInfo={setPaymentInfo} deleteItem={deleteItem} />
    </StyledContainer>
  );
};

export default MainContainer;
