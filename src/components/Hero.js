import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import * as textStyles from "../styles/text.module.css";
import * as heroStyles from "../styles/hero.module.css";
import * as generalStyles from "../styles/general.module.css";
import Img from "./Img";

const Hero = () => {
    const data = useStaticQuery(graphql`
        query HeroQuery {
            allContentfulHero {
                nodes {
                    name
                    currentPosition
                    positionApplying
                }
            }
        }
    `);

    const [showOnScroll, setShowOnScroll] = useState(0);
    const heroData = data.allContentfulHero.nodes[0];
    const { name, currentPosition, positionApplying } = heroData;

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    });

    const onScroll = (e) => {
        const scrollTop = window.scrollY;
        setShowOnScroll(scrollTop);
    };

    return (
        <section
            className={`${generalStyles.wrapper} ${generalStyles.section} ${heroStyles.hero}`}
        >
            <div className={heroStyles.imageContainer}>
                <Img />
            </div>
            <div className={heroStyles.textContainer}>
                <div
                    className={
                        showOnScroll < 1
                            ? `${heroStyles.greeting}`
                            : `${heroStyles.greeting} ${heroStyles.hide}`
                    }
                >
                    <h2 className={textStyles.title}>Hi, I'm</h2>
                    <h2 className={`${textStyles.title} ${textStyles.clrMain}`}>
                        {name}
                    </h2>
                </div>
                <div
                    className={
                        showOnScroll < 1
                            ? `${heroStyles.application} ${heroStyles.hide}`
                            : `${heroStyles.application}`
                    }
                >
                    <h4 className={textStyles.subtitle}>{currentPosition}</h4>
                    <p className={textStyles.paragraph}>
                        Söker tjä
                        <span>nsten hos er som {positionApplying}</span>
                    </p>
                    <a class={heroStyles.contactLink} href="#kontakt">
                        <button>TA KONTAKT</button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
