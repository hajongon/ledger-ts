import React from "react";
import { StyledContainer } from "./styles/StyledContainer";
import FixedCostsForm from "./FixedCostsForm";
import FixedCostsList from "./FixedCostsList";
import DeleteFixedCost from "./types/DeleteFixedCost";

const FixedCostsContainer: React.FC<DeleteFixedCost> = ({
  deleteFixedCost,
}) => {
  return (
    <StyledContainer>
      <FixedCostsForm deleteFixedCost={deleteFixedCost} />
      <FixedCostsList deleteFixedCost={deleteFixedCost} />
    </StyledContainer>
  );
};

export default FixedCostsContainer;
