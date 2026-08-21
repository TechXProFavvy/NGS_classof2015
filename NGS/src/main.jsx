import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import GlobalContextProvider from "./CONTENT/Global.jsx";
import ProfileContextProvider from "./CONTENT/ProfileContext.jsx";
import AdminProvider from "./Auth/Admins.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProfileContextProvider>
      <GlobalContextProvider>
        <AdminProvider>
          <App />
        </AdminProvider>
      </GlobalContextProvider>
    </ProfileContextProvider>
  </BrowserRouter>,
);
