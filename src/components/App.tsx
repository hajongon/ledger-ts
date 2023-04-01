import Container from "./Container";
import PaymentInfoTypes from "./types/PaymentInfoTypes";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EntireList from "./EntireList";
import ListContainer from "./ListContainer";
import Navbar from "./Navbar";

const App = () => {

  const [paymentInfo, setPaymentInfo] = useState([
    {
      id: '1',
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



  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>

          <Route path="/" element={<Container paymentInfo={paymentInfo} setPaymentInfo={setPaymentInfo} />} />
          <Route path="/list" element={<ListContainer paymentInfo={paymentInfo} setPaymentInfo={setPaymentInfo} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
