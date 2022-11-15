import React from "react";
import ReactDOM from "react-dom/client";
import AuthProvider from "./Context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
export const history = createBrowserHistory();

root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter history={history}>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
