import React from "react";
import Hero from "./components/Hero";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Activities from "./components/Activities";
import Bookings from "./components/Bookings";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <TopBar />
      <Navbar/>
      <Hero/>
      <Activities/>
      <Bookings/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
