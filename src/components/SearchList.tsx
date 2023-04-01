import { StyledPaymentList } from "./styles/StyledPaymentList";

import FilteredTypes from "./types/FilteredTypes";
import TableContainer from "./TableContainer";
import FilteredPaymentsTable from "./FilteredPaymentsTable";

const SearchList: React.FC<FilteredTypes> = ({ filteredPayments, setFilteredPayments }) => {


  return (
    <StyledPaymentList>
      <FilteredPaymentsTable filteredPayments={filteredPayments} setFilteredPayments={setFilteredPayments} />
    </StyledPaymentList>
  )
}
export default SearchList;