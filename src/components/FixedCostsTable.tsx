import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";
import {
  TableHeader,
  TableBody,
  TableH,
  TableR,
  TableD,
  EntireFixedCost,
  TableFooter,
} from "./styles/StyledTable";
import FixedCostsTypes from "../types/FixedCostsTypes";
import DeleteFixedCost from "../types/DeleteFixedCost";
import { StyledTableContainer } from "./styles/StyledTableContainer";

import { useSelector } from "react-redux";

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  :hover {
    color: red;
  }
`;

const FixedCostsTable: React.FC<DeleteFixedCost> = ({ deleteFixedCost }) => {
  // slice 가져오기
  const fixedCosts = useSelector((state: FixedCostsTypes) => state.fixedCosts);

  return (
    <StyledTableContainer>
      <TableHeader>
        <TableR>
          <TableH className="pay-date">결제일</TableH>
          <TableH>결제 내역</TableH>
          <TableH>결제 금액</TableH>
          <TableH className="delete-button"></TableH>
        </TableR>
      </TableHeader>
      <TableBody>
        {
          // initial value를 가리기 위해 filtering
          // fixedCosts를 못 찾는 문제
          // Slice를 추가하면 store.ts에도 추가해줘야 함
          fixedCosts
            .filter((el) => el.id !== "1")
            .map((el) => {
              return (
                <TableR key={el.id}>
                  <TableD className="pay-date">{el.date}일</TableD>
                  <TableD>{el.name}</TableD>
                  <TableD>{el.amount}</TableD>
                  <TableD className="delete-button">
                    <button
                      onClick={() => {
                        deleteFixedCost(el.id);
                      }}
                    >
                      <StyledFontAwesomeIcon icon={faXmark} />
                    </button>
                  </TableD>
                </TableR>
              );
            })
        }
      </TableBody>
      <TableFooter>
        <EntireFixedCost>
          <TableH>총 금액</TableH>
          <TableH></TableH>
          <TableH>
            {fixedCosts.reduce((acc, cur) => {
              acc = acc + cur.amount;
              return acc;
            }, 0)}
          </TableH>
          <TableH></TableH>
        </EntireFixedCost>
      </TableFooter>
    </StyledTableContainer>
  );
};
export default FixedCostsTable;
