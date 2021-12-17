import React from "react";
import * as educationItemStyles from "../styles/educationItem.module.css";
import * as textStyles from "../styles/text.module.css";

const EducationItem = ({ item }) => {
    return (
        <div className={`${educationItemStyles.container}`}>
            <p className={`${textStyles.paragraph} ${textStyles.clrLight}`}>
                {item.name}
            </p>
            <p className={`${textStyles.paragraph} ${textStyles.clrLight}`}>
                {item.program}
            </p>
            <p className={`${textStyles.paragraph} ${textStyles.clrLight}`}>
                {item.locationCity} {item.locationCountry}
            </p>
            <p className={`${textStyles.paragraph} ${textStyles.clrLight}`}>
                {item.dateFrom} till {item.dateTo}
            </p>
            <p className={`${textStyles.paragraph} ${textStyles.clrLight}`}>
                {item.description}
            </p>
        </div>
    );
};

export default EducationItem;
