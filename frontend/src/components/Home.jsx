import React from "react";
import Why from "../components/Why";
import CarouselSection from "../components/CarouselSection";
import Services from "../components/Services";
import StartYourJourney from "../components/StartYourJourney";

function Home() {
  return (
    <div>
      <Why />
      <CarouselSection />
      <Services />
      <StartYourJourney />
    </div>
  );
}

export default Home;