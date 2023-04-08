import styled from "styled-components";

export const TableHeader = styled.thead`
  background-color: transparent;
  font-size: 14px;
`;

export const TableBody = styled.tbody`
  display: table-row-group;
`;

export const TableH = styled.th`
  font-size: 1rem;
  padding: 5px;
  text-align: left;
  border-bottom: 1px solid lightgray;
`;

export const TableR = styled.tr``;

export const TableD = styled.td`
  padding: 5px;
  font-size: 0.9rem;
  width: 5rem;

  button {
    border: 0;
    background-color: transparent;
  }
`;

export const EntireFixedCost = styled.tr`
  margin-top: auto;
`;

export const TableFooter = styled.tfoot`
  display: table-row-group;
`;
