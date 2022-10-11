import React from "react";
import { Routes, Route } from "react-router-dom";
import Meetups from "./Meetups";
import About from "./About";

const Main = () => (
  <main>
    <Routes>
      <Route exact path="/" element={<Meetups />} />
      <Route exact path="/about" element={<About />} />
    </Routes>
  </main>
);

export default Main;
