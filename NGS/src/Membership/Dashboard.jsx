import React, { useEffect, useState } from "react";
import "../STYLES/Dashboard.css";

import {
  MdPayment,
  MdCreditCard,
  MdCalendarMonth,
  MdOutline123,
} from "react-icons/md";

import {
  FaCreditCard,
  FaCalculator,
  FaCoins,
  FaUser,
  FaChartLine,
} from "react-icons/fa";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const Dashboard = () => {
  // const getStoredPayment = async () => {
  //   let payments = JSON.parse(localStorage.getItem("Payments"));
  //   console.log(payments);
  // };
  const accountingFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
    currencySign: "accounting",
  });
  const activeMem = 43;
  const [totalPayment, setTotalPayment] = useState(85000);
  const [loading, setLoading] = useState(true);
  let totalCurrency = accountingFormatter.format(totalPayment);
  const yearlyPayment = 1000 * 4 * 12 * activeMem;
  let variance = totalPayment - yearlyPayment;
  let percent = totalPayment / yearlyPayment;
  let roundPrc = Math.round(percent * 100);
  let current_var = accountingFormatter.format(variance);
  let currency = accountingFormatter.format(parseInt(yearlyPayment));
  const activeYear = new Date().getFullYear();
  const months = [
    "Jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  const activeMonth = parseInt(new Date().getMonth());
  useEffect(() => {
    async function getStoredPayment() {
      try {
        let res = await fetch(
          "https://vercel.com/tech-0411/ngs-classof2015/payment" ||
            "http://localhost:8500/payment",
        );
        let data = await res.json();
        if (!data) return;
        setTotalPayment((prev) => ({
          ...prev,
          data,
        }));
      } catch (error) {
        throw new Error("Error in data");
      } finally {
        setLoading(false);
      }
    }
    getStoredPayment();
  }, []);

  if (loading) return <p>loading ...</p>;
  return (
    <div className="Dashboard">
      <div className="container">
        <div className="card">
          <p>current month</p>
          <MdCalendarMonth className="icon" />
          <span>{`${months[activeMonth]}:${activeYear}`}</span>
        </div>
        <div className="card">
          <p>total payment</p>
          <FaCoins className="icon" />
          <span>{totalCurrency}</span>
        </div>
        <div className="card">
          <p>variance</p>
          {totalPayment < yearlyPayment / 2 ? (
            <AiOutlineArrowDown className="neg" />
          ) : (
            <AiOutlineArrowUp className="plus" />
          )}
          <span>{current_var}</span>
        </div>
        <div className="card">
          <p>No. of members</p>
          <FaUser className="icon" />
          <span>{activeMem}</span>
        </div>
        <div className="card">
          <p>Expected Yearly Payment</p>
          <FaChartLine className="icon" />
          <span>{currency}</span>
        </div>
      </div>
      <div className="chart">
        <h1>percentage of payment</h1>
        <div className="doughnut">
          {`
           ${roundPrc}%
           `}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
