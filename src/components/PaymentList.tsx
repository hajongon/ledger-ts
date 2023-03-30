import PropTypes from "prop-types";
import { StyledPaymentList } from "./styles/StyledPaymentList";
import ListTable from "./ListTable";
import PaymentInfoTypes from "./types/PaymentInfoTypes";

const PaymentList: React.FC<PaymentInfoTypes> = ({ paymentInfo, setPaymentInfo }) => {
  return (
    <StyledPaymentList>
      <ListTable paymentInfo={paymentInfo} setPaymentInfo={setPaymentInfo}></ListTable>
    </StyledPaymentList>
  );
};

// 런타임에서의 타입 검증이 필요한 듯?
PaymentList.propTypes = {
  paymentInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  setPaymentInfo: PropTypes.func.isRequired,
};


export default PaymentList;
