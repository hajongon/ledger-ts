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
  background-color: #efeae1;
  /* padding: 20px;
  margin: 5px; */
  margin-bottom: 0px;
  padding: 1rem;
`;

interface StyledNavItemProps {
  isSelected: boolean;
}

export const StyledNavItem =
  styled.div <
  StyledNavItemProps >
  `
  /* margin: 2rem; */
  margin: 0rem 0.5rem 0rem 1rem;
  font-size: 1.1rem;
  transition: font-size ease-in-out 0.2s, color ease-in-out 0.2s;

  ${({ isSelected }) =>
    isSelected &&
    `
    font-size: 1.2rem;
    color: rgb(146, 145, 145);
    transition: font-size ease-in-out 0.2s, color ease-in-out 0.2s;
    
  `}

  :hover {
    transition: font-size ease-in-out 0.2s, color ease-in-out 0.2s;
    font-size: 1.2rem;
    color: orange;
    cursor: pointer;
  }
`;
