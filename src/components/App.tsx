import MainContainer from "./MainContainer";
import DeleteModal from "./DeleteModal";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListContainer from "./ListContainer";
import Navbar from "./Navbar";
import About from "./About";
import paymentInfoSlice from "./reducers/paymentInfoSlice";

// reduxtoolkit

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// const store = configureStore({
//   reducer: {
//     paymentInfo: paymentInfoSlice,
//   },
// });

const App = () => {
  const [paymentInfo, setPaymentInfo] = useState([
    {
      id: "1",
      name: "",
      amount: 0,
      date: "",
    },
  ]);

  useEffect(() => {
    const data = localStorage.getItem("paymentInfo");
    if (data) {
      setPaymentInfo(JSON.parse(data));
    }
  }, [setPaymentInfo]);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleteModalCheckboxChecked, setIsDeleteModalCheckboxChecked] =
    useState(false);
  const [itemToDelete, setItemToDelete] = useState("");

  const deleteItem = (id: string) => {
    if (isDeleteModalCheckboxChecked) {
      const filtered = paymentInfo.filter((payment) => payment.id !== id);
      setPaymentInfo(filtered);
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
    setPaymentInfo(filtered);
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
          <Route
            path="/"
            element={
              <MainContainer
                paymentInfo={paymentInfo}
                setPaymentInfo={setPaymentInfo}
                deleteItem={deleteItem}
              />
            }
          />
          <Route
            path="/list"
            element={
              <ListContainer
                paymentInfo={paymentInfo}
                setPaymentInfo={setPaymentInfo}
                deleteItem={deleteItem}
              />
            }
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
            paymentInfo={paymentInfo}
          />
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
