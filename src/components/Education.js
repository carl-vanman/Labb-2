import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import * as generalStyles from "../styles/general.module.css";
import * as textStyles from "../styles/text.module.css";
import * as educationStyles from "../styles/education.module.css";
import EducationItem from "./EducationItem";

const Education = () => {
    const data = useStaticQuery(graphql`
        query EducationQuery {
            allContentfulEducation(sort: { fields: orderNumber }) {
                nodes {
                    name
                    program
                    dateFrom
                    dateTo
                    description
                    id
                    orderNumber
                }
            }
        }
    `);

    const [firstEducationList, setfirstEducationList] = useState([]);
    const [secondEducationList, setsecondEducationList] = useState([]);
    const [sliceArray, setSliceArray] = useState(true);
    const educationList = [...data.allContentfulEducation.nodes];

    if (sliceArray) {
        setSliceArray((prev) => !prev);
        if (educationList.length > 1) {
            const arrayLength = educationList.length;
            let middleIndex = Math.floor(arrayLength / 2);
            if (arrayLength % 2) {
                middleIndex = middleIndex + 1;
            }
            setfirstEducationList(educationList.slice(0, middleIndex));
            setsecondEducationList(
                educationList.slice(middleIndex, arrayLength)
            );
        } else {
            setfirstEducationList(educationList);
        }
    }

    return (
        <section
            id="utbildning"
            className={`${generalStyles.wrapper} ${generalStyles.section} ${generalStyles.bgColorDark}`}
        >
            <div
                className={`${generalStyles.alignCenter} ${educationStyles.textContainer}`}
            >
                <h2
                    className={`${textStyles.title} ${textStyles.clrLight} ${textStyles.titlePadding}`}
                >
                    Utbildning
                </h2>
            </div>
            <h4
                className={`${textStyles.subtitle} ${textStyles.clrLight} ${educationStyles.latest}`}
            >
                Senaste
            </h4>
            <div className={educationStyles.educationWrapper}>
                <div
                    className={`${generalStyles.alignCenter} ${educationStyles.educationContainer}`}
                >
                    {firstEducationList.map((item) => {
                        return <EducationItem key={item.id} item={item} />;
                    })}
                </div>
                <div
                    className={`${generalStyles.alignCenter} ${educationStyles.educationContainerSec}`}
                >
                    {secondEducationList.map((item) => {
                        return <EducationItem key={item.id} item={item} />;
                    })}
                    <h4
                        className={`${textStyles.subtitle} ${textStyles.clrLight} ${educationStyles.oldest}`}
                    >
                        Äldst
                    </h4>
                </div>
            </div>
        </section>
    );
};

export default Education;
