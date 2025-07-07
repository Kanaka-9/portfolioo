// src/components/layout/Layout.jsx
import React, { Fragment } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Routers from "../routers/Routers";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <main className="flex-grow">
        <Routers />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
