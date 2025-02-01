import React from "react";
import "./App.css";
import "./styles/variables.css";
import HeroSection from "./sections/HeroSection";
import CardsSection from "./sections/CardsSection";
import Navbar from "./components/Navbar";
import ServiceSection from "./sections/ServiceSection";
import ContactSection from "./sections/ContactSection";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <CardsSection />
        <ServiceSection/>
        <ContactSection/>
      </main>
    </>
  );
}

export default App;
