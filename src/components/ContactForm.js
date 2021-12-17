import React from "react";
import * as textStyles from "../styles/text.module.css";
import * as contactFormStyles from "../styles/contactForm.module.css";

const ContactForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form
            className={`${contactFormStyles.formContainer}`}
            onSubmit={handleSubmit}
        >
            <label
                className={`${textStyles.paragraph} ${contactFormStyles.labelLayout}`}
            >
                Name
                <input
                    className={`${contactFormStyles.input}`}
                    type="text"
                    name="name"
                />
            </label>

            <label
                className={`${textStyles.paragraph} ${contactFormStyles.labelLayout}`}
            >
                Företag
                <input
                    className={`${contactFormStyles.input}`}
                    type="text"
                    name="company"
                />
            </label>

            <label
                className={`${textStyles.paragraph} ${contactFormStyles.labelLayout}`}
            >
                Email
                <input
                    className={`${contactFormStyles.input}`}
                    type="email"
                    name="email"
                />
            </label>

            <label
                className={`${textStyles.paragraph} ${contactFormStyles.labelLayout}`}
            >
                Meddelande
                <textarea
                    className={`${contactFormStyles.textArea}`}
                    type="text"
                    name="message"
                />
            </label>
            <button className={contactFormStyles.buttonLayout}>Skicka</button>
        </form>
    );
};

export default ContactForm;
