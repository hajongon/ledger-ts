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

  const paymentDeleteHandler = (id: string) => {
    const filtered = paymentInfo.filter(el => el.id !== id);
    setPaymentInfo(filtered);
    localStorage.setItem("paymentInfo", JSON.stringify(filtered));
  }

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
        {
          // initial value를 가리기 위해 filtering
          paymentInfo.filter(el => el.id !== '1').map(el => {
            return (
              <TableR key={el.id}>
                <TableD>{el.date}</TableD>
                <TableD>{el.name}</TableD>
                <TableD>{el.amount}</TableD>
                <TableD>
                  <button onClick={() => { paymentDeleteHandler(el.id) }}>delete</button>
                </TableD>
              </TableR>
            )
          })
        }
      </TableBody>
    </TableContainer>
  );
};

// propTypes 블로깅

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
