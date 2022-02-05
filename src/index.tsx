import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { TipContextProvider } from "./context/tip-context";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <TipContextProvider>
      <App />
    </TipContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
