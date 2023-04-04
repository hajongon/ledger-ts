import { StyledPaymentList } from "./styles/StyledPaymentList";

// import FilteredTypes from "./types/FilteredTypes";
import TableContainer from "./PaymentTable";
import FilteredPaymentsTable from "./FilteredPaymentsTable";

const SearchList: React.FC = () => {
  return (
    <StyledPaymentList>
      <FilteredPaymentsTable />
    </StyledPaymentList>
  );
};
export default SearchList;
