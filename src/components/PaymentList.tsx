import PropTypes from "prop-types";
import { StyledPaymentList } from "./styles/StyledPaymentList";
import ListTable from "./ListTable";
import DeleteTypes from "./types/deleteTypes";

const PaymentList: React.FC<DeleteTypes> = ({ deleteItem }) => {
  return (
    <StyledPaymentList>
      <ListTable deleteItem={deleteItem}></ListTable>
    </StyledPaymentList>
  );
};

// 런타임에서의 타입 검증이 필요한 듯?
// PaymentList.propTypes = {
//   paymentInfo: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       amount: PropTypes.number.isRequired,
//       date: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
//   setPaymentInfo: PropTypes.func.isRequired,
// };

export default PaymentList;
