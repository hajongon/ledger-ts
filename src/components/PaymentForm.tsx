import { ChangeEvent, FormEvent, useState } from "react";

import { StyledInputContainer, StyledSubmitButton } from "./styles/StyledInputContainer";
import { StyledPaymentForm } from "./styles/StyledPaymentForm";
import { PaymentInput } from "./styles/StyledInputContainer";

const PaymentForm = () => {
  const [paymentInfo, setPaymentInfo] = useState({
    name: "",
    amount: 0,
    date: "",
  });

  // const [selectedDate, setSelectedDate] = useState("");

  //                                             ChangeEvent를 사용하면 아래 오류 해결
  const handleInputChange = (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
    setPaymentInfo({ ...paymentInfo, [key]: e.target.value });
    //                                              ~~~~~~
    // Property 'value' does not exist on type 'EventTarget'.
  };

  // const handleDateChange = (e) => {
  //   setSelectedDate(e.target.value);
  // }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <StyledPaymentForm onSubmit={handleSubmit}>
      <StyledInputContainer>
        <PaymentInput type="text" placeholder="결제 내역" onChange={handleInputChange("name")} />
        <PaymentInput
          type="number"
          placeholder="결제 금액"
          onChange={handleInputChange("amount")}
        />
        <PaymentInput type="date" placeholder="결제 날짜" onChange={handleInputChange("date")} />
        <StyledSubmitButton onClick={handleSubmit}>submit</StyledSubmitButton>
      </StyledInputContainer>
    </StyledPaymentForm>
  );
};

export default PaymentForm;
