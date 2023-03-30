import {
  TableContainer,
  TableHeader,
  TableBody,
  TableH,
  TableR,
  TableD,
} from "./styles/StyledTable";

const ListTable = () => {
  return (
    <TableContainer>
      <TableHeader>
        <TableR>
          <TableH>결제 날짜</TableH>
          <TableH>결제 내역</TableH>
          <TableH>결제 금액</TableH>
        </TableR>
      </TableHeader>
      <TableBody>
        <TableR>
          <TableD>2023/3/3</TableD>
          <TableD>메가커피</TableD>
          <TableD>2000원</TableD>
        </TableR>
        <TableR>
          <TableD>2023/3/3</TableD>
          <TableD>GS25</TableD>
          <TableD>2000원</TableD>
        </TableR>
      </TableBody>
    </TableContainer>
  );
};

export default ListTable;
