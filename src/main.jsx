import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { IconContext } from "react-icons";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <IconContext.Provider value={{ color: "white", size: "1.7rem" }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </IconContext.Provider>
);
