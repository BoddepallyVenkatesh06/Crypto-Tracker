import React from "react";

import LandingPageComponent from "../Components/LandingPage/Intro";
import Footer from "../Components/Common/Footer";
import Header from "../Components/Common/Header";


function HomePage() {
    return (
        <div>
            <Header />
            <LandingPageComponent />
            <Footer />
        </div>
    );
}

export default HomePage;