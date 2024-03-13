import React from "react";
import CarouselSection from "./CarouselSection";
import Services from "./Services";
import StartYourJourney from "./StartYourJourney";
import Footer from "./Footer";
import Hero from "./Hero";

function Home() {
    return (
        <div>
            <Hero />
            <CarouselSection />
            <Services />
            <StartYourJourney />
            <Footer />
        </div>
    );
}

export default Home;