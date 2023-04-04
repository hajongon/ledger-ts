import { StyledContainer } from "./styles/StyledContainer";

import SearchList from "./SearchList";
import SearchForm from "./SearchForm";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPaymentInfo } from "@src/reducers/paymentInfoSlice";

const ListContainer: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const data = localStorage.getItem("paymentInfo");
    if (data) {
      dispatch(setPaymentInfo(JSON.parse(data)));
    }
  }, [setPaymentInfo]);
  return (
    <StyledContainer>
      <SearchForm />
      <SearchList />
    </StyledContainer>
  );
};

export default ListContainer;
