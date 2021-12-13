import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import * as textStyles from "../styles/text.module.css";
import * as heroStyles from "../styles/hero.module.css";
import * as generalStyles from "../styles/general.module.css";

const Hero = () => {
    const data = useStaticQuery(graphql`
        query HeroQuery {
            allContentfulHero {
                nodes {
                    image {
                        description
                        file {
                            url
                        }
                    }
                    name
                    currentPosition
                    positionApplying
                }
            }
        }
    `);

    const [sticky, setSticky] = useState(0);
    const heroData = data.allContentfulHero.nodes[0];
    const { image, name, currentPosition, positionApplying } = heroData;

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    });

    const isSticky = (e) => {
        const scrollTop = window.scrollY;
        setSticky(scrollTop);
    };

    return (
        <section
            className={`${generalStyles.wrapper} ${generalStyles.section} ${heroStyles.hero}`}
        >
            <div className={heroStyles.imageContainer}>
                <img src={image.file.url} alt={image.description} />
            </div>
            <div className={heroStyles.textContainer}>
                <div
                    className={
                        sticky < 1
                            ? `${heroStyles.greeting}`
                            : `${heroStyles.greeting} ${heroStyles.hide}`
                    }
                >
                    <h2 className={textStyles.title}>Hi, I'm</h2>
                    <h2 className={`${textStyles.title} ${textStyles.blue}`}>
                        {name}
                    </h2>
                </div>
                <div
                    className={
                        sticky < 1
                            ? `${heroStyles.application} ${heroStyles.hide}`
                            : `${heroStyles.application}`
                    }
                >
                    <h4 className={textStyles.subtitle}>{currentPosition}</h4>
                    <p className={textStyles.paragraph}>
                        Söker tjänsten hos er som {positionApplying}
                    </p>
                    <button>TA KONTAKT</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;

/* was "sticky < 40" before a added generalStyle.section min-width 100vw*/
