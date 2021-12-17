import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import * as textStyles from "../styles/text.module.css";
import * as generalStyles from "../styles/general.module.css";
import * as contactStyles from "../styles/contact.module.css";
import ContactForm from "./ContactForm";
import Img from "./Img";

const Contact = () => {
    const data = useStaticQuery(graphql`
        query ContactQuery {
            allContentfulContact {
                nodes {
                    name
                    street
                    city
                    country
                    zipcode
                    phoneNumber
                    email
                    socialName
                    social
                    secondSocialName
                    secondSocial
                }
            }
        }
    `);

    const contactInfo = { ...data.allContentfulContact.nodes[0] };
    console.log("contactInfo", contactInfo);

    return (
        <section
            id="kontakt"
            className={`${generalStyles.wrapper} ${generalStyles.section}`}
        >
            <h2
                className={`${textStyles.title} ${textStyles.titlePadding} ${contactStyles.titleLayout}`}
            >
                Kontakt
            </h2>
            <div className={`${contactStyles.formLayout}`}>
                <h4 className={`${textStyles.subtitle} ${textStyles.clrMain}`}>
                    Fast Track
                </h4>
                <ContactForm />
            </div>
            <div className={`${contactStyles.contactLayout}`}>
                <Img />
                <div className={`${contactStyles.contactInfo}`}>
                    <h4
                        className={`${textStyles.subtitle} ${textStyles.clrLight}`}
                    >
                        {contactInfo.name}
                    </h4>
                    <p className={`${textStyles.paragraph}`}>
                        {contactInfo.street}
                    </p>
                    <p
                        className={`${textStyles.paragraph}`}
                    >{`${contactInfo.zipcode} ${contactInfo.city}, ${contactInfo.country}`}</p>
                    <p className={`${textStyles.paragraph}`}>
                        {contactInfo.phoneNumber}
                    </p>
                    <p className={`${textStyles.paragraph}`}>
                        {contactInfo.email}
                        <a
                            className={contactStyles.link}
                            href={contactInfo.social}
                        >
                            {contactInfo.socialName}
                        </a>
                        {"|"}
                        <a
                            className={contactStyles.link}
                            href={contactInfo.secondSocial}
                        >
                            {contactInfo.secondSocialName}
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
