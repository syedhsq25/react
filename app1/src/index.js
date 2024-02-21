import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import Header from "/home/sydhussain/reactjs/app1/src/components/Header.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <div className="grid-container">
      <div className="header">
        <h2>Header</h2>
      </div>
    </div>
  </React.StrictMode>
);
