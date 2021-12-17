import * as React from "react";
import Competence from "../components/Competence";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Profile from "../components/Profile";
import Experience from "../components/Experience";
import Divider from "../components/Divider";
import Education from "../components/Education";
import Contact from "../components/Contact";

const IndexPage = () => {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <main>
                <Hero />
                <Profile />
                <Competence />
                <Divider />
                <Experience />
                <Divider />
                <Education />
                <Contact />
            </main>
        </>
    );
};

export default IndexPage;
