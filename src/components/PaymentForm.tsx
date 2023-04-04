import { ChangeEvent, FormEvent, useRef, useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';

import { StyledInputContainer, StyledSubmitButton } from "./styles/StyledInputContainer";
import { StyledForm } from "./styles/StyledForm";
import { PaymentInput } from "./styles/StyledInputContainer";
import PaymentInfoTypes from "../types/PaymentInfoTypes";
import DeleteTypes from "../types/DeleteTypes";

import { useSelector, useDispatch } from "react-redux";
import { setPaymentInfo } from "../reducers/paymentInfoSlice";

const PaymentForm: React.FC<DeleteTypes> = () => {

  // slice 가져오기
  const paymentInfo = useSelector(
    (state: PaymentInfoTypes) => state.paymentInfo
  );
  // dispatch 정의
  const dispatch = useDispatch();

  // const [selectedDate, setSelectedDate] = useState("");
  const [id, setId] = useState<string>(uuidv4());

  const nameRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    let enteredName = nameRef.current!.value;
    let enteredAmount = amountRef.current!.value;
    let selectedDate = dateRef.current!.value;
    if (!enteredName || !enteredAmount || !selectedDate) {
      alert('지출 관련 내용을 정확히 입력하세요.');
      return;
    }
    const newPayment = { id: uuidv4(), name: enteredName, amount: +enteredAmount, date: selectedDate };
    // 날짜 순 정렬
    const sortedPaymentInfo = [...paymentInfo, newPayment].sort((a, b) => (new Date(b.date) as any) - (new Date(a.date) as any));
    dispatch(setPaymentInfo(sortedPaymentInfo));
    localStorage.setItem("paymentInfo", JSON.stringify(sortedPaymentInfo));
    // uuid 초기화
    setId(uuidv4());

    // 인풋 초기화
    nameRef.current!.value = "";
    amountRef.current!.value = "";
    dateRef.current!.value = "";
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
// PaymentForm.propTypes = {
//   paymentInfo: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       amount: PropTypes.number.isRequired,
//       date: PropTypes.string.isRequired,
//     }).isRequired,
//   ).isRequired,
//   setPaymentInfo: PropTypes.func.isRequired,
// };


export default PaymentForm;
