import styled from "styled-components";

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  width: 100%;
`;

export const PaymentInput = styled.input`
  height: 20px;
  width: 80%;
  margin-bottom: 10px;
`;

export const ButtonList = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledSubmitButton = styled.button`
  background-color: lightgray;
  border: 1px solid black;
  width: 86%;
  color: black;
  border-radius: 5px;
  height: 25px;
  margin-bottom: 10px;
  :hover {
    background-color: antiquewhite;
  }
`;

export const SearchButton = styled.button`
  background-color: lightgray;
  border: 1px solid black;
  border-radius: 5px;
  width: 60px;
  height: 25px;
  margin-bottom: 10px;
  margin-right: 5px;
  :hover {
    background-color: antiquewhite;
  }
`;

export const InputLabel = styled.div`
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const SearchInputSect = styled.div`
  margin-left: 15px;
`;
