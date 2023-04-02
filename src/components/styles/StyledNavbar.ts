import styled from "styled-components";

export const StyledNavbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 800px;
  /* height: 5%; */
  border: 1px solid black;
  border-radius: 10px;
  background-color: transparent;
  /* padding: 20px;
  margin: 5px; */
  margin-bottom: 0px;
  padding: 1rem;
`

export const StyledNavItem = styled.div`
  /* margin: 2rem; */
  margin: 0.4rem;
  font-size: 1.3rem;

  :hover {
    color: lightgray;
    cursor: pointer;
  }
`