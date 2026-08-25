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
          "http://localhost:8500/payment" ||
            "https://ngs-classof2015-api.onrender.com/payment",
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

  if (loading) return <h4 className="loading">loading...</h4>;
  return (
    <div className="Notification">
      {alert.length < 1 ? (
        <h1>You have no notifications</h1>
      ) : (
        <div>
          {alert.map((item) => {
            return item.name;
          })}
        </div>
      )}
    </div>
  );
};

export default Notify;
