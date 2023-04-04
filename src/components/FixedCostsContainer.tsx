import React from "react";
import { StyledContainer } from "./styles/StyledContainer";
import FixedCostsForm from "./FixedCostsForm";
import FixedCostsList from "./FixedCostsList";
import DeleteFixedCost from "../types/DeleteFixedCost";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFixedCosts } from "@src/reducers/fixedCostsSlice";

const FixedCostsContainer: React.FC<DeleteFixedCost> = ({
  deleteFixedCost,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const data = localStorage.getItem("fixedCosts");
    if (data) {
      dispatch(setFixedCosts(JSON.parse(data)));
    }
  }, [setFixedCosts]);

  return (
    <StyledContainer>
      <FixedCostsForm deleteFixedCost={deleteFixedCost} />
      <FixedCostsList deleteFixedCost={deleteFixedCost} />
    </StyledContainer>
  );
};

export default FixedCostsContainer;
