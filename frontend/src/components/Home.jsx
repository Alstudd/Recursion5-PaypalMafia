import React from "react";
import CarouselSection from "./CarouselSection";
import Services from "./Services";
import StartYourJourney from "./StartYourJourney";
import Footer from "./Footer";
import Hero from "./Hero";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            {/* <HeroSection /> */}
            <CarouselSection />
            <Services />
            <StartYourJourney />
            <Footer />
        </div>
    );
}

export default Home;