import { useState } from "react";
import "./App.css";
import { Header } from "./components";
import { Hero } from "./components";
import { Section1 } from "./components";
import { Section2, Section3, Section4 } from "./components";
import { Footer } from "./components";
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Section1 />
      <Section3 />
      <Section2 />
      <Section4 />
      <Footer />
    </div>
  );
}

export default App;
