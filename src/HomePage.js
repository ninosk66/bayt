import React from "react";
import Header from "./Header";
import Properties from "./Properties";
import LoginPage from "./LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const HomePage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' Component={LoginPage}></Route>
        <Route></Route>
      </Routes>
      <div>
        <header>
          {/* Header/Navbar component */}
          <Header />
        </header>

        <main>
          {/* Properties component */}
          <Properties />
        </main>

        <footer>{/* Footer component */}</footer>
      </div>
    </BrowserRouter>
  );
};

export default HomePage;
