import React from "react";
import * as competenceLevelStyles from "../styles/competenceLevel.module.css";

const CompetenceLevel = ({ level }) => {
    return (
        <div className={competenceLevelStyles.container}>
            {level === 1 ? (
                <>
                    <div
                        className={`${competenceLevelStyles.dot} ${competenceLevelStyles.fill}`}
                    ></div>
                    <div className={competenceLevelStyles.dot}></div>
                    <div className={competenceLevelStyles.dot}></div>
                    <div className={competenceLevelStyles.dot}></div>
                    <div className={competenceLevelStyles.dot}></div>
                </>
            ) : level === 2 ? (
                <>
                    <div
                        className={`${competenceLevelStyles.dot} ${competenceLevelStyles.fill}`}
                    ></div>
                    <div
                        className={`${competenceLevelStyles.dot} ${competenceLevelStyles.fill}`}
                    ></div>
                    <div className={competenceLevelStyles.dot}></div>
                    <div className={competenceLevelStyles.dot}></div>
                    <div className={competenceLevelStyles.dot}></div>
                </>
            ) : level === 3 ? (
                <>
                    <div
                        className={`${competenceLevelStyles.dot} ${competenceLevelStyles.fill}`}
                    ></div>
                    <div
                        className={`${competenceLevelStyles.dot} ${competenceLevelStyles.fill}`}
                    ></div>
                    <div
                        className={`${competenceLevelStyles.dot} ${competenceLevelStyles.fill}`}
                    ></div>
                    <div className={competenceLevelStyles.dot}></div>
                    <div className={competenceLevelStyles.dot}></div>
                </>
            ) : level === 4 ? (
                <>
                    <div
                        className={`${competenceLevelStyles.dot} ${competenceLevelStyles.fill}`}
                    ></div>
                    <div
                        className={`${competenceLevelStyles.dot} ${competenceLevelStyles.fill}`}
                    ></div>
                    <div
                        className={`${competenceLevelStyles.dot} ${competenceLevelStyles.fill}`}
                    ></div>
                    <div
                        className={`${competenceLevelStyles.dot} ${competenceLevelStyles.fill}`}
                    ></div>
                    <div className={competenceLevelStyles.dot}></div>
                </>
            ) : level === 5 ? (
                <>
                    <div
                        className={`${competenceLevelStyles.dot} ${competenceLevelStyles.fill}`}
                    ></div>
                    <div
                        className={`${competenceLevelStyles.dot} ${competenceLevelStyles.fill}`}
                    ></div>
                    <div
                        className={`${competenceLevelStyles.dot} ${competenceLevelStyles.fill}`}
                    ></div>
                    <div
                        className={`${competenceLevelStyles.dot} ${competenceLevelStyles.fill}`}
                    ></div>
                    <div
                        className={`${competenceLevelStyles.dot} ${competenceLevelStyles.fill}`}
                    ></div>
                </>
            ) : (
                <p>No competence Level set</p>
            )}
        </div>
    );
};

export default CompetenceLevel;
