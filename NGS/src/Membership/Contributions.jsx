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
      let res = await fetch("http://localhost:8500/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(records),
      });
      toast.success("Payment Added Successfully - see the Dashboard");
      let data = await res.json();
    } catch (err) {
      toast.error(`Something went wrong ${err}`);
      throw new Error("something went wrong", err);
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
              placeholder="Payers Fullname"
              onChange={recordData}
              value={records.payer}
            />
          </section>

          <section className="inputter">
            <input
              type="text"
              name="recorder"
              id="inputter"
              placeholder="Recorders Fullname"
              onChange={recordData}
              value={records.recorder}
            />
          </section>
          <section className="button">
            <button type="submit" onClick={addPayment}>
              <FaPlus />
              add payment
            </button>
            <button type="reset">clear field</button>
          </section>
        </form>
      </section>
    </div>
  );
};

export default Contributions;
