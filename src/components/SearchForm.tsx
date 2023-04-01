import { StyledForm } from "./styles/StyledForm";
import React, { FormEvent, useState, useRef } from "react";

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

  const handleSearchByDateRange = (event: FormEvent) => {
    event.preventDefault();
    const enteredStartDate = startDateRef.current!.value;
    const enteredEndDate = endDateRef.current!.value;
    const filtered = filteredPayments.filter(
      (payment) =>
        payment.date >= enteredStartDate && payment.date <= enteredEndDate
    );

    setFilteredPayments(filtered);
  };

  const handleSearchByName = (event: FormEvent) => {
    event.preventDefault();
    const filtered = paymentInfo.filter(payment =>
      payment.name.includes(name)
    );
    setFilteredPayments(filtered);
  };

  const resetHandler = () => {
    setFilteredPayments(paymentInfo);
  }

  return (
    <StyledForm>
      <div>기간</div>
      <div>
        <input type="date" ref={startDateRef} />
        <input type="date" ref={endDateRef} />
      </div>
      <div>
        <button onClick={handleSearchByDateRange}>검색</button>
        <button onClick={resetHandler}>초기화</button>
      </div>
      <div>결제 내역</div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <div>
        <button onClick={handleSearchByName}>검색</button>
        <button onClick={resetHandler}>초기화</button>
      </div>
    </StyledForm>
  );
}

export default SearchForm;
