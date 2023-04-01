
import {
  TableHeader,
  TableBody,
  TableH,
  TableR,
  TableD,
} from "./styles/StyledTable";
import PaymentInfoTypes from "./types/PaymentInfoTypes";
import { StyledTableContainer } from "./styles/StyledTableContainer";

const TableContainer: React.FC<PaymentInfoTypes> = ({ paymentInfo, setPaymentInfo }) => {

  const paymentDeleteHandler = (id: string) => {
    const filtered = paymentInfo.filter(el => el.id !== id);
    setPaymentInfo(filtered);
    localStorage.setItem("paymentInfo", JSON.stringify(filtered));
  }



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
          paymentInfo.filter(el => el.id !== '1').map(el => {
            return (
              <TableR key={el.id}>
                <TableD>{el.date}</TableD>
                <TableD>{el.name}</TableD>
                <TableD>{el.amount}</TableD>
                <TableD>


                  <button onClick={() => paymentDeleteHandler(el.id)}>delete</button>


                </TableD>
              </TableR>
            )
          })
        }
      </TableBody>
    </StyledTableContainer>
  );
}
export default TableContainer;