import EntireList from "./EntireList"
import { StyledListContainer } from "./styles/StyledListContainer";
import PaymentInfoTypes from "./types/PaymentInfoTypes";
const ListContainer: React.FC<PaymentInfoTypes> = ({ paymentInfo, setPaymentInfo }) => {
    return (
        <StyledListContainer>
            <EntireList paymentInfo={paymentInfo} setPaymentInfo={setPaymentInfo} />
        </StyledListContainer>
    )
}
export default ListContainer;