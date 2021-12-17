import React from "react";
import * as generalStyles from "../styles/general.module.css";
import * as dividerStyles from "../styles/divider.module.css";

const Divider = () => {
    return (
        <div
            className={`${generalStyles.wrapper} ${generalStyles.bgColorDark} ${generalStyles.bgColorDark}`}
        >
            <div className={dividerStyles.divider}></div>
        </div>
    );
};

export default Divider;
