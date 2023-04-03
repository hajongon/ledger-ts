import { StyledPaymentList } from "./styles/StyledPaymentList";

// import FilteredTypes from "./types/FilteredTypes";
import TableContainer from "./TableContainer";
import FilteredPaymentsTable from "./FilteredPaymentsTable";

const SearchList: React.FC = () => {
  return (
    <StyledPaymentList>
      <FilteredPaymentsTable />
    </StyledPaymentList>
  );
};
export default SearchList;
