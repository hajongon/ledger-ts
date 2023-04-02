import { useLocation } from "react-router-dom";
import {
  TableHeader,
  TableBody,
  TableH,
  TableR,
  TableD,
} from "./styles/StyledTable";
import FilteredTypes from "./types/FilteredTypes";
import { StyledTableContainer } from "./styles/StyledTableContainer";

const FilteredPaymentsTable: React.FC<FilteredTypes> = ({ filteredPayments, setFilteredPayments }) => {

  const isListPage = useLocation().pathname === "/list";

  return (
    <StyledTableContainer>
      <TableHeader>
        <TableR>
          <TableH>결제 날짜</TableH>
          <TableH>결제 내역</TableH>
          <TableH>결제 금액</TableH>
        </TableR>
      </TableHeader>
      <TableBody>
        {
          // initial value를 가리기 위해 filtering
          filteredPayments.filter(el => el.id !== '1').map(el => {
            return (
              <TableR key={el.id}>
                <TableD>{el.date}</TableD>
                <TableD>{el.name}</TableD>
                <TableD>{el.amount}</TableD>
              </TableR>
            )
          })
        }
      </TableBody>

      <TableR>
        <TableH>총 금액</TableH>
        <TableH></TableH>
        <TableH>{filteredPayments.reduce((acc, cur) => {
          // 객체인데 바로 더하려고 했음. 바보 ㅎ
          // acc = acc + cur (X)
          acc = acc + cur.amount;
          return acc;
        }, 0)}</TableH>
      </TableR>
    </StyledTableContainer>
  );
}
export default FilteredPaymentsTable;