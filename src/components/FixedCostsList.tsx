import { StyledPaymentList } from "./styles/StyledPaymentList";
import FixedCostsTable from "./FixedCostsTable";
import DeleteFixedCost from "./types/DeleteFixedCost";

const FixedCostsList: React.FC<DeleteFixedCost> = ({ deleteFixedCost }) => {
  return (
    <StyledPaymentList>
      <FixedCostsTable deleteFixedCost={deleteFixedCost}></FixedCostsTable>
    </StyledPaymentList>
  );
};

export default FixedCostsList;
