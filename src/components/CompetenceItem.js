import React from "react";
import * as textStyles from "../styles/text.module.css";
import * as competenceItemStyles from "../styles/competenceItem.module.css";
import CompetenceLevel from "./CompetenceLevel";

const CompetenceItem = ({ item }) => {
    return (
        <div className={competenceItemStyles.container}>
            <h4 className={`${textStyles.subtitle} ${textStyles.clrLight}`}>
                {item.title.toUpperCase()}
            </h4>
            <CompetenceLevel level={item.level} />
        </div>
    );
};

export default CompetenceItem;
