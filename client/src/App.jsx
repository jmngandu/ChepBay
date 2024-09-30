import { useState } from "react";
import "./App.scss";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Service from "./Service";
import data from "./Components/data";

function App() {
  return (
    <>
      <Nav />
      <Hero />
    </>
  );
}

export default App;
