import MainContainer from "./MainContainer";
import DeleteModal from "./DeleteModal";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListContainer from "./ListContainer";
import Navbar from "./Navbar";
import About from "./About";

// reduxtoolkit

import { useSelector, useDispatch } from "react-redux";
import { setPaymentInfo } from "./reducers/paymentInfoSlice";
import PaymentInfoTypes from "./types/PaymentInfoTypes";
import FixedCostsTypes from "./types/FixedCostsTypes";
import { setFixedCosts } from "./reducers/fixedCostsSlice";
import FixedCostsContainer from "./FixedCostsContainer";

const App = () => {
  // slice 가져오기
  const paymentInfo = useSelector(
    (state: PaymentInfoTypes) => state.paymentInfo
  );
  const fixedCosts = useSelector((state: FixedCostsTypes) => state.fixedCosts);

  // dispatch 정의
  const dispatch = useDispatch();

  useEffect(() => {
    const data1 = localStorage.getItem("paymentInfo");
    if (data1) {
      dispatch(setPaymentInfo(JSON.parse(data1)));
    }
    const data2 = localStorage.getItem("fixedCosts");
    if (data2) {
      dispatch(setPaymentInfo(JSON.parse(data2)));
    }
  }, [setPaymentInfo]);

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
    <BrowserRouter>
      <div className="app">
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
