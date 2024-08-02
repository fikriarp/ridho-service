import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
