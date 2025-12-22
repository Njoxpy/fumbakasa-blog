import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

if (!process.env.REACT_APP_TITLE) {
  throw new Error("React app title missing");
}

if (!process.env.REACT_APP_BASE_URL) {
  throw new Error("React app api url missing");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
