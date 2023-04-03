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

const App = () => {
  // slice 가져오기
  const paymentInfo = useSelector(
    (state: PaymentInfoTypes) => state.paymentInfo
  );
  // dispatch 정의
  const dispatch = useDispatch();

  useEffect(() => {
    const data = localStorage.getItem("paymentInfo");
    if (data) {
      dispatch(setPaymentInfo(JSON.parse(data)));
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
