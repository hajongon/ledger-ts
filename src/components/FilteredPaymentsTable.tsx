import { useSelector, useDispatch } from "react-redux";
import { setFiltered } from "./reducers/filteredSlice";

import { useEffect } from "react";
import FilteredTypes from "./types/FilteredTypes";
import PaymentInfoTypes from "./types/PaymentInfoTypes";
import {
  TableHeader,
  TableBody,
  TableH,
  TableR,
  TableD,
} from "./styles/StyledTable";
// import FilteredTypes from "./types/FilteredTypes";
import { StyledTableContainer } from "./styles/StyledTableContainer";

const FilteredPaymentsTable: React.FC = () => {
  // slice 가져오기
  const filtered = useSelector((state: FilteredTypes) => state.filtered);
  const paymentInfo = useSelector(
    (state: PaymentInfoTypes) => state.paymentInfo
  );

  // dispatch 정의
  const dispatch = useDispatch();

  // dispatch는 useEffect 안에. 렌더링과 동시에 실행되면 무한 로딩될 가능성.
  useEffect(() => {
    dispatch(setFiltered(paymentInfo));
  }, [paymentInfo, dispatch]);

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
          filtered
            .filter((el) => el.id !== "1")
            .map((el) => {
              return (
                <TableR key={el.id}>
                  <TableD>{el.date}</TableD>
                  <TableD>{el.name}</TableD>
                  <TableD>{el.amount}</TableD>
                </TableR>
              );
            })
        }
      </TableBody>

      <TableR>
        <TableH>총 금액</TableH>
        <TableH></TableH>
        <TableH>
          {filtered.reduce((acc, cur) => {
            // 객체인데 바로 더하려고 했음. 바보 ㅎ
            // acc = acc + cur (X)
            acc = acc + cur.amount;
            return acc;
          }, 0)}
        </TableH>
      </TableR>
    </StyledTableContainer>
  );
};
export default FilteredPaymentsTable;
