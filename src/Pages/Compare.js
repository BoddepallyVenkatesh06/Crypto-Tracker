import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import Loader from "../Components/Common/Loader/Loader";
import Footer from "../Components/Common/Footer";



function ComparePage() {

    return (
        <div>
            <Header />
            
                <Loader />

            <Footer />
        </div>
    );
}

export default ComparePage;