import React from "react";
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
    console.log(profileData.about.length);

    return (
        <section
            className={`${generalStyles.wrapper} ${profileStyles.wrapper}`}
        >
            <h4
                className={`${textStyles.subtitle} ${textStyles.blue} ${profileStyles.subtitle}`}
            >
                Profil
            </h4>
            <p
                id="profil"
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
