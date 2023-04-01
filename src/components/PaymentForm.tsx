import { ChangeEvent, FormEvent, useRef, useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';

import { StyledInputContainer, StyledSubmitButton } from "./styles/StyledInputContainer";
import { StyledForm } from "./styles/StyledForm";
import { PaymentInput } from "./styles/StyledInputContainer";
import PaymentInfoTypes from "./types/PaymentInfoTypes";

const PaymentForm: React.FC<PaymentInfoTypes> = ({ paymentInfo, setPaymentInfo }) => {
  // const [selectedDate, setSelectedDate] = useState("");
  const [id, setId] = useState<string>(uuidv4());

  const nameRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const enteredName = nameRef.current!.value;
    const enteredAmount = amountRef.current!.value;
    const selectedDate = dateRef.current!.value;
    if (!enteredName || !enteredAmount || !selectedDate) {
      alert('지출 관련 내용을 정확히 입력하세요.');
      return;
    }
    const copied = [...paymentInfo];
    copied.push({ id, name: enteredName, amount: +enteredAmount, date: selectedDate });
    setPaymentInfo(copied);
    // uuid 초기화
    setId(uuidv4());
    localStorage.setItem("paymentInfo", JSON.stringify(copied));
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInputContainer>
        <PaymentInput type="text" placeholder="결제 내역" ref={nameRef} />
        <PaymentInput
          type="number"
          placeholder="결제 금액"
          ref={amountRef}
        />
        <PaymentInput type="date" placeholder="결제 날짜" ref={dateRef} />
        <StyledSubmitButton onClick={handleSubmit}>submit</StyledSubmitButton>
      </StyledInputContainer>
    </StyledForm>
  );
};

// 런타임에서의 타입 검증이 필요한 듯?
PaymentForm.propTypes = {
  paymentInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  setPaymentInfo: PropTypes.func.isRequired,
};


export default PaymentForm;
