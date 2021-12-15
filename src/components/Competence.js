import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import * as generalStyles from "../styles/general.module.css";
import * as textStyles from "../styles/text.module.css";
import * as competenceStyles from "../styles/competence.module.css";
import CompetenceItem from "./competenceItem";
import CompetenceLevel from "./CompetenceLevel";

const Competence = () => {
    const data = useStaticQuery(graphql`
        query CompetenceQuery {
            allContentfulAreaOfCompetence(sort: { fields: order }) {
                nodes {
                    id
                    title
                    competence {
                        id
                        title
                        level
                        orderNumber
                    }
                }
            }
        }
    `);

    const areaOfCompetence = data.allContentfulAreaOfCompetence.nodes;

    return (
        <section
            id="kompetens"
            className={`${generalStyles.wrapper} ${generalStyles.section} ${generalStyles.bgColorDark}`}
        >
            <div
                className={`${generalStyles.alignCenter} ${competenceStyles.textContainer}`}
            >
                <h2 className={`${textStyles.title} ${textStyles.clrLight}`}>
                    Kompetens
                </h2>
                <div className={competenceStyles.levelContainer}>
                    <p
                        className={`${textStyles.paragraph} ${textStyles.clrLight}`}
                    >
                        Beginner
                    </p>
                    <CompetenceLevel level={3} />
                    <p
                        className={`${textStyles.paragraph} ${textStyles.clrLight}`}
                    >
                        Expert
                    </p>
                </div>
            </div>

            <div
                className={`${generalStyles.alignCenter} ${competenceStyles.competenceContainer}`}
            >
                {areaOfCompetence.map((area) => {
                    return (
                        <div key={area.id}>
                            <h4
                                className={`${textStyles.subtitle} ${textStyles.clrLight}`}
                            >
                                {area.title}
                            </h4>
                            <div className={competenceStyles.itemsContainer}>
                                {area.competence.map((item) => {
                                    return (
                                        <CompetenceItem
                                            key={item.id}
                                            item={item}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Competence;
