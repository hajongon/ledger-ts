import PropTypes from "prop-types";
import {
  TableContainer,
  TableHeader,
  TableBody,
  TableH,
  TableR,
  TableD,
} from "./styles/StyledTable";
import PaymentInfoTypes from "./types/PaymentInfoTypes";

const ListTable: React.FC<PaymentInfoTypes> = ({ paymentInfo, setPaymentInfo }) => {
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
        {
          paymentInfo.map(el => {
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
    </TableContainer>
  );
};

ListTable.propTypes = {
  paymentInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  setPaymentInfo: PropTypes.func.isRequired,
}


export default ListTable;
