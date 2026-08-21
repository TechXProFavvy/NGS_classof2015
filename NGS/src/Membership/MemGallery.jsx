import React, { useContext } from "react";
import "../STYLES/globalstyle.css";
import { MdArrowBack } from "react-icons/md";
import { ProfileContext } from "../CONTENT/ProfileContext";

const MemGallery = () => {
  const {activeUser} = useContext(ProfileContext);
  return (
    <div className="MemGallery">
      <h1>welcome Legend !{activeUser}</h1>
      <p>Only authorized members can view the Dashboard</p>
      <p>For any info, contact your secretary</p>
      <p>use the side bar icons for different pages</p>
      <p>
        <MdArrowBack className="icon-s" />
      </p>
    </div>
  );
};

export default MemGallery;
