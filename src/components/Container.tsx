import { useState } from "react";

import { StyledContainer } from "./styles/StyledContainer";
import PaymentForm from "./PaymentForm";
import PaymentList from "./PaymentList";

const Container = () => {
    const [paymentInfo, setPaymentInfo] = useState([
        {
            id: '1',
            name: "",
            amount: 0,
            date: "",
        },
    ]);

    return (
        <StyledContainer>
            <PaymentForm paymentInfo={paymentInfo} setPaymentInfo={setPaymentInfo}></PaymentForm>
            <PaymentList paymentInfo={paymentInfo} setPaymentInfo={setPaymentInfo}></PaymentList>
        </StyledContainer>
    );
};

export default Container;
