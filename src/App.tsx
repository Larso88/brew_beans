import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import TopNavigation from "./component/TopNavigation";
import Home from "./component/Home";
import About from "./component/About";
import Menu from "./component/Menu";
import Shop from "./component/Shop";
import Reviews from "./component/Reviews";
import Contact from "./component/Contact";


function App() {
  return (
    <div className="App">
        <TopNavigation />
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/menu"} element={<Menu />} />
            <Route path={"/shop"} element={<Shop />} />
            <Route path={"/reviews"} element={<Reviews />} />
            <Route path={"/contact"} element={<Contact />} />
        </Routes>
      </div>
  );
}

export default App;
