import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { SearchProvider } from "./context/SearchContext.jsx";
import "antd/dist/reset.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <SearchProvider>
      <CartProvider>
        <Router>
          <App />
        </Router>
      </CartProvider>
    </SearchProvider>
  </AuthProvider>
);
