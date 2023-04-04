import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import {
  TableHeader,
  TableBody,
  TableH,
  TableR,
  TableD,
} from "./styles/StyledTable";
import PaymentInfoTypes from "./types/PaymentInfoTypes";
import DeleteTypes from "./types/DeleteTypes";
import { StyledTableContainer } from "./styles/StyledTableContainer";

import { useSelector } from "react-redux";

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  :hover {
    color: red;
  }
`;

const PaymentTable: React.FC<DeleteTypes> = ({ deleteItem }) => {
  // slice 가져오기
  const paymentInfo = useSelector(
    (state: PaymentInfoTypes) => state.paymentInfo
  );
  // dispatch 정의
  // const dispatch = useDispatch();

  // const [deletedItems, setDeletedItems] = useState<{ id: string, name: string, amount: number, date: string }[]>([]);

  // const paymentDeleteHandler = (id: string) => {
  //   const deletedItem = paymentInfo.find(el => el.id === id);
  //   if (deletedItem) {
  //     const filtered = paymentInfo.filter(el => el.id !== id);
  //     dispatch(setPaymentInfo(filtered));
  //     setDeletedItems(prevItems => [...prevItems, deletedItem]);
  //     localStorage.setItem("paymentInfo", JSON.stringify(filtered));
  //   }
  // }

  // const undoHandler = () => {
  //   if (deletedItems.length > 0) {
  //     const lastDeletedItem = deletedItems[deletedItems.length - 1];
  //     setDeletedItems(prevItems => prevItems.slice(0, prevItems.length - 1));
  //     setPaymentInfo(prevItems => [...prevItems, lastDeletedItem]);
  //     localStorage.setItem("paymentInfo", JSON.stringify([...paymentInfo, lastDeletedItem]));
  //   }
  // }

  console.log(paymentInfo.filter((el) => el.id !== "1"));

  return (
    <StyledTableContainer>
      <TableHeader>
        <TableR>
          <TableH className="pay-date">결제 날짜</TableH>
          <TableH>결제 내역</TableH>
          <TableH>결제 금액</TableH>
          <TableH className="delete-button"></TableH>
        </TableR>
      </TableHeader>
      <TableBody>
        {
          // initial value를 가리기 위해 filtering
          paymentInfo
            .filter((el) => el.id !== "1")
            .map((el) => {
              return (
                <TableR key={el.id}>
                  <TableD className="pay-date">{el.date}</TableD>
                  <TableD>{el.name}</TableD>
                  <TableD>{el.amount}</TableD>
                  <TableD className="delete-button">
                    <button
                      onClick={() => {
                        deleteItem(el.id);
                      }}
                    >
                      <StyledFontAwesomeIcon icon={faXmark} />
                    </button>
                  </TableD>
                </TableR>
              );
            })
        }
        {/* {
          deletedItems.map(el => {
            return (
              <TableR key={el.id}>
                <TableD className="pay-date">{el.date}</TableD>
                <TableD>{el.name}</TableD>
                <TableD>{el.amount}</TableD>
                <TableD className="delete-button">
                  <button onClick={undoHandler}><FontAwesomeIcon icon={faRotateLeft} /></button>
                </TableD>
              </TableR>
            )
          })
        } */}
      </TableBody>
    </StyledTableContainer>
  );
};
export default PaymentTable;
