import React from "react";
import * as ExperienceItemStyles from "../styles/experienceItem.module.css";
import * as textStyles from "../styles/text.module.css";

const ExperienceItem = ({ item }) => {
    return (
        <div className={`${ExperienceItemStyles.container}`}>
            <p className={`${textStyles.paragraph} ${textStyles.clrLight}`}>
                {item.position}
            </p>
            <p className={`${textStyles.paragraph} ${textStyles.clrLight}`}>
                {item.company}
            </p>
            <p className={`${textStyles.paragraph} ${textStyles.clrLight}`}>
                {item.locationCity} {item.locationCountry}
            </p>
            <p className={`${textStyles.paragraph} ${textStyles.clrLight}`}>
                {item.dateFrom} till {item.dateEnd}
            </p>
            <p className={`${textStyles.paragraph} ${textStyles.clrLight}`}>
                {item.description}
            </p>
        </div>
    );
};

export default ExperienceItem;
