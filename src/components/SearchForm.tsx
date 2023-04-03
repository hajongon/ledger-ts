import { StyledForm } from "./styles/StyledForm";
import React, { FormEvent, useState, useRef } from "react";
import { StyledInputContainer, StyledSubmitButton, PaymentInput, ButtonList, SearchButton, InputLabel, SearchInputSect } from "./styles/StyledInputContainer";

// 여기서는 네개를 받기 때문에 타입 정의 새로 해야 함
type EntireTypes = {
  paymentInfo: { id: string, name: string, amount: number, date: string }[],
  setPaymentInfo: React.Dispatch<
    React.SetStateAction<{ id: string, name: string, amount: number, date: string }[]>
  >,
  filteredPayments: { id: string; name: string; amount: number; date: string }[];
  setFilteredPayments: React.Dispatch<React.SetStateAction<{ id: string; name: string; amount: number; date: string }[]>>;
};

const SearchForm: React.FC<EntireTypes> = ({ filteredPayments, setFilteredPayments, paymentInfo, setPaymentInfo }) => {

  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState("");

  const handleSearch = (event: FormEvent, startDate: string, endDate: string, name: string) => {
    // 검색 누르면 필터링 됐다가 다시 전체 목록이 나오는 문제 발생. 
    // preventDefault 없어서 새로고침 된 것이었음.
    event.preventDefault();

    let filtered: { id: string; name: string; amount: number; date: string }[] = [];
    if (startDate && endDate) {
      filtered = filteredPayments.filter(
        (payment) =>
          payment.date >= startDate && payment.date <= endDate
      );
    }

    if (name) {
      filtered = paymentInfo.filter((payment) => payment.name.includes(name));
    }

    if (filtered.length > 0) {
      setFilteredPayments(filtered);
    } else {
      setFilteredPayments(paymentInfo);
    }


  };
  const resetHandler = () => {
    setFilteredPayments(paymentInfo);
    setName("");
    startDateRef.current!.value = "";
    endDateRef.current!.value = "";


  };

  return (
    <StyledForm onSubmit={(event) => handleSearch(event, startDateRef.current!.value, endDateRef.current!.value, name)}>
      <SearchInputSect>
        <InputLabel className="date-search-label">기간</InputLabel>
        <PaymentInput type="date" ref={startDateRef}></PaymentInput>
        <PaymentInput type="date" ref={endDateRef}></PaymentInput>

        <InputLabel className="name-search-label">결제 내역</InputLabel>
        <PaymentInput type="text" value={name} onChange={(e) => setName(e.target.value)}></PaymentInput>
        <ButtonList>
          <SearchButton>검색</SearchButton>
          <SearchButton onClick={resetHandler}>초기화</SearchButton>
        </ButtonList>
      </SearchInputSect>
    </StyledForm>
  );

}

export default SearchForm;
