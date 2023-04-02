import { StyledContainer } from "./styles/StyledContainer";
import PaymentInfoTypes from "./types/PaymentInfoTypes";
import FilteredTypes from "./types/FilteredTypes";
import { useState, useEffect } from "react";

import SearchList from "./SearchList";
import SearchForm from "./SearchForm";

const ListContainer: React.FC<PaymentInfoTypes> = ({ paymentInfo, setPaymentInfo }) => {

  const [filteredPayments, setFilteredPayments] = useState<
    FilteredTypes["filteredPayments"]
  >([]);

  useEffect(() => {
    setFilteredPayments(paymentInfo);
  }, [paymentInfo]);

  console.log(filteredPayments)
  return (
    <StyledContainer>
      <SearchForm
        filteredPayments={filteredPayments}
        setFilteredPayments={setFilteredPayments}
        paymentInfo={paymentInfo}
        setPaymentInfo={setPaymentInfo}
      />
      <SearchList
        filteredPayments={filteredPayments}
        setFilteredPayments={setFilteredPayments}
      />
    </StyledContainer>
  );
};

export default ListContainer;
