import { StyledListContainer } from "./styles/StyledListContainer";
import PaymentInfoTypes from "./types/PaymentInfoTypes";
import FilteredTypes from "./types/FilteredTypes";
import { useState, useEffect } from "react";

import EntireList from "./EntireList";
import SearchForm from "./SearchForm";

const ListContainer: React.FC<PaymentInfoTypes> = ({ paymentInfo, setPaymentInfo }) => {
  const [filteredPayments, setFilteredPayments] = useState<
    FilteredTypes["filteredPayments"]
  >([]);

  useEffect(() => {
    setFilteredPayments(paymentInfo);
  }, [paymentInfo]);

  return (
    <StyledListContainer>
      <SearchForm
        filteredPayments={filteredPayments}
        setFilteredPayments={setFilteredPayments}
        paymentInfo={paymentInfo}
        setPaymentInfo={setPaymentInfo}
      />
      <EntireList
        filteredPayments={filteredPayments}
        setFilteredPayments={setFilteredPayments}
      />
    </StyledListContainer>
  );
};

export default ListContainer;
