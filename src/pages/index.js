import * as React from "react";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Profile from "../components/Profile";
//import * as generalStyles from "../styles/general.module.css";

/* can I track cordinates for each element and use for scroll to in nav and change
what nav link is active?
*/
const IndexPage = () => {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <main>
                <Hero />
                <Profile />
            </main>
        </>
    );
};

export default IndexPage;
