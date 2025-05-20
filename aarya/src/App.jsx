import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Impact from "./Components/Impact/Impact";
import Services from "./Components/Services/Services";
import Feedback from "./Components/Feedback/Feedback";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Impact />
      <Services />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
