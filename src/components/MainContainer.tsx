import React from "react";
import { StyledContainer } from "./styles/StyledContainer";
import PaymentForm from "./PaymentForm";
import PaymentList from "./PaymentList";
import DeleteTypes from "./types/DeleteTypes";

const MainContainer: React.FC<DeleteTypes> = ({ deleteItem }) => {
  return (
    <StyledContainer>
      <PaymentForm deleteItem={deleteItem} />
      <PaymentList deleteItem={deleteItem} />
    </StyledContainer>
  );
};

export default MainContainer;
