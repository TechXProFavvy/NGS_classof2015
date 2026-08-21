import React from "react";
import "../STYLES/Notpermitted.css"
import { MdSentimentVeryDissatisfied } from "react-icons/md";

const NotPermitted = () => {
  return (
    <div className="Not-permitted">
      <h1>You are not permitted to view this page</h1>
      <h3>contact the secretary</h3>
      <MdSentimentVeryDissatisfied className="cry"/>
    </div>
  );
};

export default NotPermitted;
