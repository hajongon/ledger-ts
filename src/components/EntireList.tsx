import { StyledEntireList } from "./styles/StyledEntireList";

import FilteredTypes from "./types/FilteredTypes";
import TableContainer from "./TableContainer";
import FilteredPaymentsTable from "./FilteredPaymentsTable";

const EntireList: React.FC<FilteredTypes> = ({ filteredPayments, setFilteredPayments }) => {


  return (
    <StyledEntireList>
      <FilteredPaymentsTable filteredPayments={filteredPayments} setFilteredPayments={setFilteredPayments} />
    </StyledEntireList>
  )
}
export default EntireList;