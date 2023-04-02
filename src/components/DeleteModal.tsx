import styled from "styled-components";

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6); /* 변경된 배경 색상 */
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 0; /* 변경된 z-index 값 */
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

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  max-width: 95%;
  padding: 2rem;
  border-radius: 4px;
  background: white;
  z-index: 1000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
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

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
  deleteConfirmed: () => void;
  deleteCancelled: () => void;
  isDeleteModalCheckboxChecked: boolean;
  setIsDeleteModalOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >,
  checkboxChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DeleteModal: React.FC<DeleteModalTypes> = ({ deleteConfirmed, deleteCancelled, isDeleteModalCheckboxChecked, setIsDeleteModalOpen, checkboxChanged }) => {
  return (
    <>
      <ModalContainer>
        <ModalContent>
          <ModalTitle>항목을 삭제하시겠습니까?</ModalTitle>
          <p>삭제한 항목은 복구할 수 없습니다.</p>
          <label>
            <input type="checkbox" checked={isDeleteModalCheckboxChecked} onChange={checkboxChanged} />
            <span>다음부터 이 메시지를 표시하지 않음</span>
          </label>
          <ModalButtonContainer>
            <ModalButton onClick={deleteConfirmed}>삭제</ModalButton>
            <ModalButton onClick={deleteCancelled}>취소</ModalButton>
          </ModalButtonContainer>
        </ModalContent>
      </ModalContainer>
      {/* Modal 전체 요소 밖으로 빼주니까 딱 원하는대로 됨 */}
      <ModalBackground onClick={() => setIsDeleteModalOpen(false)}></ModalBackground>
    </>

  );
};

export default DeleteModal;
