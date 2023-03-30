import { useState, useEffect } from "react";

import { StyledContainer } from "./styles/StyledContainer";
import PaymentForm from "./PaymentForm";
import PaymentList from "./PaymentList";
import PaymentInfoTypes from "./types/PaymentInfoTypes";
const Container: React.FC<PaymentInfoTypes> = ({ paymentInfo, setPaymentInfo }) => {

    return (
        <StyledContainer>
            <PaymentForm paymentInfo={paymentInfo} setPaymentInfo={setPaymentInfo}></PaymentForm>
            <PaymentList paymentInfo={paymentInfo} setPaymentInfo={setPaymentInfo}></PaymentList>
        </StyledContainer>
    );
};

export default Container;
