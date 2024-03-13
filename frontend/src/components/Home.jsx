import React from "react";
import CarouselSection from "./CarouselSection";
import Services from "./Services";
import StartYourJourney from "./StartYourJourney";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <CarouselSection />
      <Services />
      <StartYourJourney />
      <Footer />
    </div>
  );
}

export default Home;