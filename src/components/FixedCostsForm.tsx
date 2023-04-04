import styled from "styled-components";

import { FormEvent, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { StyledInputContainer, StyledSubmitButton } from "./styles/StyledInputContainer";
import { StyledForm } from "./styles/StyledForm";
import { PaymentInput } from "./styles/StyledInputContainer";
import FixedCostsTypes from "../types/FixedCostsTypes";
import DeleteFixedCost from "../types/DeleteFixedCost";

import { useSelector, useDispatch } from "react-redux";
import { setPaymentInfo } from "../reducers/paymentInfoSlice";
import { setFixedCosts } from "../reducers/fixedCostsSlice";

// components는 대문자로 시작
const RowAlignDiv = styled.div`
  display: flex;
  margin-left: 2rem;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const DateInput = styled.input`
  width: 4.2em;
  margin: 0.5rem;
`;

const FixedCostsForm: React.FC<DeleteFixedCost> = () => {

  // slice 가져오기
  const fixedCosts = useSelector(
    (state: FixedCostsTypes) => state.fixedCosts
  );
  // dispatch 정의
  const dispatch = useDispatch();

  // const [selectedDate, setSelectedDate] = useState("");
  const [id, setId] = useState<string>(uuidv4());

  const nameRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const handleCostSubmit = (event: FormEvent) => {
    event.preventDefault();
    let enteredName = nameRef.current!.value;
    let enteredAmount = amountRef.current!.value;
    let selectedDate = dateRef.current!.value;
    if (!enteredName || !enteredAmount || !selectedDate) {
      alert('지출 관련 내용을 정확히 입력하세요.');
      return;
    }
    const newFixedCosts = { id: uuidv4(), name: enteredName, amount: +enteredAmount, date: selectedDate };
    // 날짜 순 정렬
    const sortedFixedCosts = [...fixedCosts, newFixedCosts].sort((a, b) => (parseInt(a.date) - parseInt(b.date)));
    dispatch(setFixedCosts(sortedFixedCosts));
    localStorage.setItem("fixedCosts", JSON.stringify(sortedFixedCosts));
    // uuid 초기화
    setId(uuidv4());
    // 인풋 초기화
    nameRef.current!.value = "";
    amountRef.current!.value = "";
    dateRef.current!.value = "";
  };

  return (
    <StyledForm onSubmit={handleCostSubmit}>
      <StyledInputContainer>
        <PaymentInput type="text" placeholder="결제 내역" ref={nameRef} />
        <PaymentInput
          type="number"
          placeholder="결제 금액"
          ref={amountRef}
        />
        <RowAlignDiv>매월 <DateInput type="text" ref={dateRef} /> 일 결제</RowAlignDiv>
        <StyledSubmitButton onClick={handleCostSubmit}>등록</StyledSubmitButton>
      </StyledInputContainer>
    </StyledForm>
  );
};

export default FixedCostsForm;
