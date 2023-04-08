import MainContainer from "./MainContainer";
import DeleteModal from "./DeleteModal";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListContainer from "./ListContainer";
import Navbar from "./Navbar";
import About from "./About";
// 타입스크립트 이미지 파일 타입 검사
import bearImage from "../../public/ledgerBear.png";
import "../../public/ledgerBear.d.ts";

import styled from "styled-components";

// reduxtoolkit

import { useSelector, useDispatch } from "react-redux";
import { setPaymentInfo } from "../reducers/paymentInfoSlice";
import PaymentInfoTypes from "../types/PaymentInfoTypes";
import FixedCostsTypes from "../types/FixedCostsTypes";
import { setFixedCosts } from "../reducers/fixedCostsSlice";
import FixedCostsContainer from "./FixedCostsContainer";

const Bear = styled.img`
  z-index: -1;
  width: 300px;
  margin-top: -30px;
`;

const App = () => {
  // slice 가져오기
  const paymentInfo = useSelector(
    (state: PaymentInfoTypes) => state.paymentInfo
  );
  const fixedCosts = useSelector((state: FixedCostsTypes) => state.fixedCosts);

  // dispatch 정의
  const dispatch = useDispatch();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleteModalCheckboxChecked, setIsDeleteModalCheckboxChecked] =
    useState(false);
  const [itemToDelete, setItemToDelete] = useState("");

  const deleteItem = (id: string) => {
    if (isDeleteModalCheckboxChecked) {
      const filtered = paymentInfo.filter((payment) => payment.id !== id);
      dispatch(setPaymentInfo(filtered));
      setItemToDelete(id);
      localStorage.setItem("paymentInfo", JSON.stringify(filtered));
      setIsDeleteModalOpen(false);
    } else {
      setItemToDelete(id);
      const item = paymentInfo.find((item) => item.id === id);
      if (item) {
        setIsDeleteModalOpen(true);
      }
    }
  };

  const deleteFixedCost = (id: string) => {
    const filtered = fixedCosts.filter((cost) => cost.id !== id);
    dispatch(setFixedCosts(filtered));
    setItemToDelete(id);
    localStorage.setItem("fixedCosts", JSON.stringify(filtered));
    setIsDeleteModalOpen(false);
  };

  const deleteConfirmed = () => {
    const filtered = paymentInfo.filter((item) => item.id !== itemToDelete);
    dispatch(setPaymentInfo(filtered));
    localStorage.setItem("paymentInfo", JSON.stringify(filtered));
    setIsDeleteModalOpen(false);
    setItemToDelete("");
  };

  const deleteCancelled = () => {
    setIsDeleteModalOpen(false);
    setIsDeleteModalCheckboxChecked(false);
  };

  const checkboxChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDeleteModalCheckboxChecked(event.target.checked);
  };

  return (
    // prod
    <BrowserRouter basename="/wheredidyouspend">
      {/* dev */}
      {/* <BrowserRouter> */}
      <div className="app">
        <Bear src={bearImage} />
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContainer deleteItem={deleteItem} />} />
          <Route path="/list" element={<ListContainer />} />
          <Route
            path="/fixed"
            element={<FixedCostsContainer deleteFixedCost={deleteFixedCost} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
        {isDeleteModalOpen && (
          <DeleteModal
            deleteConfirmed={deleteConfirmed}
            deleteCancelled={deleteCancelled}
            isDeleteModalCheckboxChecked={isDeleteModalCheckboxChecked}
            isDeleteModalOpen={isDeleteModalOpen}
            setIsDeleteModalOpen={setIsDeleteModalOpen}
            checkboxChanged={checkboxChanged}
            itemToDelete={itemToDelete}
          />
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
