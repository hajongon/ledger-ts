import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import PaymentInfoTypes from "./types/PaymentInfoTypes";
const ModalBackground =
  styled.div <
  { isDeleteModalOpen: boolean } >
  `
  width: 100vw;
  height: 100vh;
  background-color: rgba(103, 103, 103, 0.6); /* 변경된 배경 색상 */
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 0; /* 변경된 z-index 값 */

  opacity: ${({ isDeleteModalOpen }) => (isDeleteModalOpen ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  display: ${({ isDeleteModalOpen }) => (isDeleteModalOpen ? "block" : "none")};
`;

const ModalContainer = styled.div`
  background-color: #efeae1;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 10;
  width: 480px;

  @media (max-width: 600px) {
    width: 80%;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
`;

const ModalContent = styled.div`
  margin-bottom: 1.5rem;

  span {
    margin-left: 0.3rem;
  }
`;

const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ModalButton = styled.button`
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  border-radius: 4px;
  background: #cdc8bf;
  color: black;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #efeae1;
  }
`;

type DeleteModalTypes = {
  deleteConfirmed: () => void,
  deleteCancelled: () => void,
  isDeleteModalCheckboxChecked: boolean,
  isDeleteModalOpen: boolean,
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  checkboxChanged: (event: React.ChangeEvent<HTMLInputElement>) => void,
  itemToDelete: string,
};

const DeleteModal: React.FC<DeleteModalTypes> = ({
  deleteConfirmed,
  deleteCancelled,
  isDeleteModalCheckboxChecked,
  isDeleteModalOpen,
  setIsDeleteModalOpen,
  checkboxChanged,
  itemToDelete,
}) => {
  // slice 가져오기
  const paymentInfo = useSelector(
    (state: PaymentInfoTypes) => state.paymentInfo
  );
  // dispatch 정의
  const dispatch = useDispatch();
  const handleBackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDeleteModalOpen(false);
    // 이벤트 버블링 막기
    e.stopPropagation();
  };

  return (
    <>
      <ModalContainer>
        <ModalContent>
          <ModalTitle>다음 항목을 삭제하시겠습니까?</ModalTitle>
          <p>
            결제 내역: {paymentInfo.find((el) => el.id === itemToDelete)?.name}
          </p>
          <p>
            결제 날짜: {paymentInfo.find((el) => el.id === itemToDelete)?.date}
          </p>
          <p>
            결제 금액:{" "}
            {paymentInfo.find((el) => el.id === itemToDelete)?.amount}원
          </p>

          <p>삭제한 항목은 복구할 수 없습니다.</p>
          <label>
            <input
              type="checkbox"
              checked={isDeleteModalCheckboxChecked}
              onChange={checkboxChanged}
            />
            <span>다음부터 이 메시지를 표시하지 않음</span>
          </label>
          <ModalButtonContainer>
            <ModalButton onClick={deleteConfirmed}>삭제</ModalButton>
            <ModalButton onClick={deleteCancelled}>취소</ModalButton>
          </ModalButtonContainer>
        </ModalContent>
      </ModalContainer>
      {/* Modal 전체 요소 밖으로 빼주니까 딱 원하는대로 됨 */}
      <ModalBackground
        onClick={handleBackClick}
        isDeleteModalOpen={isDeleteModalOpen}
      ></ModalBackground>
    </>
  );
};

export default DeleteModal;
