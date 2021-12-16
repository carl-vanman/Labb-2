import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import * as generalStyles from "../styles/general.module.css";
import * as textStyles from "../styles/text.module.css";
import * as experienceStyles from "../styles/experience.module.css";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
    const data = useStaticQuery(graphql`
        query ExperienceQuery {
            allContentfulWorkExperience(sort: { fields: orderNumber }) {
                nodes {
                    position
                    company
                    locationCity
                    locationCountry
                    dateFrom
                    dateEnd
                    description
                    orderNumber
                    id
                }
            }
        }
    `);

    const [firstExperienceList, setFirstExperienceList] = useState([]);
    const [secondExperienceList, setSecondExperienceList] = useState([]);
    const [sliceArray, setSliceArray] = useState(true);
    const experienceList = [...data.allContentfulWorkExperience.nodes];

    if (sliceArray) {
        setSliceArray((prev) => !prev);
        if (experienceList.length > 1) {
            const arrayLength = experienceList.length;
            const middleIndex = Math.floor(arrayLength / 2);
            setFirstExperienceList(experienceList.slice(0, middleIndex));
            setSecondExperienceList(
                experienceList.slice(middleIndex, arrayLength)
            );
        } else {
            setFirstExperienceList(experienceList);
        }
    }

    return (
        <section
            id="arbetslivserfarenhet"
            className={`${generalStyles.wrapper} ${generalStyles.section} ${generalStyles.bgColorDark} ${generalStyles.bgColorDark}`}
        >
            <div
                className={`${generalStyles.alignCenter} ${experienceStyles.textContainer}`}
            >
                <h2 className={`${textStyles.title} ${textStyles.clrLight}`}>
                    Arbetslivserfarenhet
                </h2>
            </div>
            <h4
                className={`${textStyles.subtitle} ${textStyles.clrLight} ${experienceStyles.latest}`}
            >
                Senaste
            </h4>
            <div className={experienceStyles.experienceWrapper}>
                <div
                    className={`${generalStyles.alignCenter} ${experienceStyles.experienceContainer}`}
                >
                    {firstExperienceList.map((item) => {
                        return <ExperienceItem key={item.id} item={item} />;
                    })}
                </div>
                <div
                    className={`${generalStyles.alignCenter} ${experienceStyles.experienceContainerSec}`}
                >
                    {secondExperienceList.map((item) => {
                        return <ExperienceItem key={item.id} item={item} />;
                    })}
                </div>
            </div>
            <h4
                className={`${textStyles.subtitle} ${textStyles.clrLight} ${experienceStyles.oldest}`}
            >
                Äldst
            </h4>
        </section>
    );
};

export default Experience;
