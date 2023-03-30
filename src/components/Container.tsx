import { StyledContainer } from "./styles/StyledContainer";
import PaymentForm from "./PaymentForm";
import PaymentList from "./PaymentList";

const Container = () => {
  return (
    <StyledContainer>
      <PaymentForm></PaymentForm>
      <PaymentList></PaymentList>
    </StyledContainer>
  );
};

export default Container;
