import { StyledContainer } from "./styles/StyledContainer";

import SearchList from "./SearchList";
import SearchForm from "./SearchForm";

const ListContainer: React.FC = () => {
  return (
    <StyledContainer>
      <SearchForm />
      <SearchList />
    </StyledContainer>
  );
};

export default ListContainer;
