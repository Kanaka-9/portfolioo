// src/App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-white">
        <Layout />
      </div>
    </BrowserRouter>
  );
};

export default App;
 