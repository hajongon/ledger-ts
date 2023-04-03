import PropTypes from "prop-types";

// import PaymentInfoTypes from "./types/PaymentInfoTypes";
import TableContainer from "./TableContainer";
import DeleteTypes from "./types/deleteTypes";

const ListTable: React.FC<DeleteTypes> = ({ deleteItem }) => {
  return <TableContainer deleteItem={deleteItem} />;
};

// propTypes 블로깅

// ListTable.propTypes = {
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

export default ListTable;
