import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import * as textStyles from "../styles/text.module.css";
import * as generalStyles from "../styles/general.module.css";
import * as profileStyles from "../styles/profile.module.css";

const Profile = () => {
    const data = useStaticQuery(graphql`
        query ProfileQuery {
            allContentfulProfile {
                nodes {
                    about {
                        about
                    }
                }
            }
        }
    `);

    const profileData = data.allContentfulProfile.nodes[0].about;

    /* test, hade velat flytta till general.module.css */
    useEffect(() => {
        window.addEventListener("scroll", slideIn);
        return () => {
            window.removeEventListener("scroll", slideIn);
        };
    });

    let intViewportHeight = window.innerHeight / 2;

    const slideIn = (e) => {
        const scrollTop = window.scrollY;
        const showParagraph = document.querySelector("#paragraph");

        scrollTop > intViewportHeight
            ? showParagraph.classList.remove(`${profileStyles.hide}`)
            : showParagraph.classList.add(`${profileStyles.hide}`);
    };
    /* test end */

    return (
        <section
            id="profil"
            className={`${generalStyles.wrapper} ${generalStyles.section}`}
        >
            <h4
                className={`${textStyles.subtitle} ${textStyles.blue} ${profileStyles.subtitle}`}
            >
                Profil
            </h4>
            <p
                id="paragraph"
                className={
                    profileData.about.length > 700
                        ? `${textStyles.paragraph} ${profileStyles.paragraph} ${profileStyles.twoColumn}`
                        : `${textStyles.paragraph} ${profileStyles.paragraph}`
                }
            >
                {profileData.about}
            </p>
        </section>
    );
};

export default Profile;

/* 
<section
            id="profil"
            className={`${generalStyles.wrapper} ${generalStyles.section} ${profileStyles.wrapper}`}
        >
*/
