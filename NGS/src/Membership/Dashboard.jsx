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
import { toast } from "react-toastify";
import axios from "axios";

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
  const activeMem = 42;
  const [totalPayment, setTotalPayment] = useState([]);
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
  const [payers, setPayers] = useState([]);
  const activeMonth = parseInt(new Date().getMonth());
  const uniqueUsers = [
    ...new Map(payers.map((item) => [item.name, item])).values(),
  ];

  useEffect(() => {
    (async function getPayment() {
      try {
        let request = await axios.get(
          "http://192.168.0.100:8500/payment" ||
            "https://ngs-classof2015-api.onrender.com/payment",
        );

        if (!request.data) return toast.error("cannot get dashboard Data");
        setPayers(request.data);

        {
          let cashIn = request.data.map((amount) => {
            return amount.amountPaid;
          });
          if (cashIn.length < 1) return;
          let total = cashIn.reduce((cumm, curr) => {
            return cumm + curr;
          });
          if (!total) setTotalPayment(85000);
          setTotalPayment(total + 85000);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading)
    return (
      <h4
        style={{
          display: "block",
          alignContent: "center",
          color: "red",
          textAlign: "center",
          height: "100%",
          textTransform: "capitalize",
        }}
      >
        loading ...
      </h4>
    );
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
        <h1>contribution analysis</h1>
        <div className="doughnut">
          <div className="dough">
            <div className="progress">{`
           ${roundPrc}%
           
           `}</div>
          </div>
          <div className="users">
            <table>
              <thead>
                <tr>
                  <th>s/n</th>
                  <th>name</th>
                  <th>amount</th>
                  <th>date</th>
                </tr>
              </thead>
              <tbody>
                {payers.map((list, index) => {
                  return (
                    <tr key={list._id}>
                      <td>{index + 1}</td>
                      <td>{list.payer}</td>
                      <td>{list.amountPaid}</td>
                      <td>{list.dateOfPayment}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
