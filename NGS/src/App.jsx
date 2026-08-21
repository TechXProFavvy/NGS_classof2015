import React from "react";
import Navbar from "./NAVBAR/Navbar";
import Content from "./CONTENT/Content";
import {ToastContainer} from 'react-toastify'
import '../node_modules/react-toastify/dist/ReactToastify.css'

function App() {
  
  return (
    <div className="App">
      <ToastContainer position="top-center"></ToastContainer>
      <Navbar />
      <Content />
    </div>
  );
}
export default App;
