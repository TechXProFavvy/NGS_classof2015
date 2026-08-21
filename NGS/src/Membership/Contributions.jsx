import React, { useEffect, useState } from "react";
import { FaAddressCard, FaPlus } from "react-icons/fa";
import "../STYLES/Contributions.css";
import { MdArrowDownward } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";

const Contributions = () => {
  const paymentArr = [];
  let storedPayment = [];
  const [records, setRecords] = useState({
    dateOfPayment: "",
    amountPaid: 0,
    payer: "",
    recorder: "",
  });
  function recordData(e) {
    let { name, value } = e.target;

    setRecords((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  async function addPayment(e) {
    e.preventDefault();
    try {
      if (records.amountPaid < 1000)
        return toast.info("Payment must be 1k or higher");
      let res = await axios.post(
        "https://vercel.com/tech-0411/ngs-classof2015/payment" ||
          "http://localhost:8500/payment",
        records,
      );
      if (!res.data) return toast.error("something went wrong");
      toast.success("payment added successfully!");
    } catch (err) {
      throw new Error("something went wrong");
    }
  }

  return (
    <div className="Contributions">
      <h1>
        <span>add payment</span> <FaAddressCard className="icon" />
      </h1>
      <section className="Form">
        <form>
          <h1>
            enter data here <MdArrowDownward className="icon-a" />
          </h1>
          <section className="date">
            <input
              type="date"
              name="dateOfPayment"
              id="pdate"
              placeholder="PaymentDate"
              onChange={recordData}
              value={records.dateOfPayment}
            />
          </section>
          <section className="amount">
            <input
              type="number"
              name="amountPaid"
              id="amount"
              placeholder="Amount"
              onChange={recordData}
              value={records.amountPaid}
            />
          </section>
          <section className="payer">
            <input
              type="text"
              name="payer"
              id="payer"
              placeholder="payer"
              onChange={recordData}
              value={records.payer}
            />
          </section>

          <section className="inputter">
            <input
              type="text"
              name="recorder"
              id="inputter"
              placeholder="Recorder"
              onChange={recordData}
              value={records.recorder}
            />
          </section>
          <section className="button">
            <button type="submit" onClick={addPayment}>
              add payment <FaPlus />
            </button>
            <button type="reset">clear field</button>
          </section>
        </form>
      </section>
    </div>
  );
};

export default Contributions;
