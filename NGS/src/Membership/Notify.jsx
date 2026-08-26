import React, { useEffect, useState } from "react";
import "../STYLES/globalstyle.css";
import { toast } from "react-toastify";
const Notify = () => {
  const [alert, setAlert] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function getNotify() {
      try {
        let res = await fetch(
          "https://ngs-classof2015-api.onrender.com/api/payment",
        );
        let data = await res.json();
        if (!data) return;
        setAlert(data);
      } catch (err) {
        toast.error("Something went wrong:" + "" + err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  function deleteNote(id) {
    toast.info("Not yet added... calm down");
  }

  if (loading) return <h4 className="loading">loading...</h4>;
  return (
    <div className="Notification">
      {alert.length < 1 ? (
        <h1>You have no notifications</h1>
      ) : (
        <div className="notify_cards">
          {alert.map((list) => {
            return (
              <div className="card" key={list._id}>
                {`${list.payer} has paid the sum of ${list.amountPaid},recorded by ${list.recorder} on ${list.dateOfPayment}`}{" "}
                <button
                  onClick={() => {
                    deleteNote(list._id);
                  }}
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Notify;
