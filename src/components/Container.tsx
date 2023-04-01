import React from "react";
import { StyledContainer } from "./styles/StyledContainer";
import PaymentForm from "./PaymentForm";
import PaymentList from "./PaymentList";
import PaymentInfoTypes from "./types/PaymentInfoTypes";
import Navbar from "./Navbar";
import MainPage from "./MainPage";

const Container: React.FC<PaymentInfoTypes> = ({ paymentInfo, setPaymentInfo }) => {
  return (


    <StyledContainer>
      <PaymentForm paymentInfo={paymentInfo} setPaymentInfo={setPaymentInfo} />
      <PaymentList paymentInfo={paymentInfo} setPaymentInfo={setPaymentInfo} />
    </StyledContainer>

  );
};

export default Container;
