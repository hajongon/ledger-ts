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
      <div>기간</div>
      <div>
        <input type="date" ref={startDateRef} />
        <input type="date" ref={endDateRef} />
      </div>
      <div>
      </div>
      <div>결제 내역</div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <button>검색</button>
        <button onClick={resetHandler}>초기화</button>
      </div>
    </StyledForm>
  );

}

export default SearchForm;
