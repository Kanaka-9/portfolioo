import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Routers from '../routers/Routers';
import { BrowserRouter as Router } from 'react-router-dom';

function Layout() {
  return (
    <Router>
      <Header />
      <div className="flex-1 flex flex-col">
        <main className="flex-1">
          <Routers />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default Layout;
