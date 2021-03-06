import React from "react";

import * as navStyles from "../styles/navigation.module.css";
import * as generalStyles from "../styles/general.module.css";

const Navigation = () => {
    const isActive = window.location.hash;
    console.log(isActive);

    return (
        <nav className={`${generalStyles.wrapper} ${navStyles.nav}`}>
            <ul className={navStyles.navContainer}>
                <li className={navStyles.navItem}>
                    <a
                        onClick={() => (document.documentElement.scrollTop = 0)}
                        href="#hem"
                        className={
                            !isActive || isActive === "#hem"
                                ? navStyles.active
                                : ""
                        }
                    >
                        Hem
                    </a>
                </li>
                <li className={navStyles.navItem}>
                    <a
                        href="#profil"
                        className={
                            isActive === "#profil" ? navStyles.active : ""
                        }
                    >
                        Profil
                    </a>
                </li>
                <li className={navStyles.navItem}>
                    <a
                        href="#kompetens"
                        className={
                            isActive === "#kompetens" ? navStyles.active : ""
                        }
                    >
                        Kompetenser
                    </a>
                </li>
                <li className={navStyles.navItem}>
                    <a
                        href="#arbetslivserfarenhet"
                        className={
                            isActive === "#arbetslivserfarenhet"
                                ? navStyles.active
                                : ""
                        }
                    >
                        Arbetslivserfarenhet
                    </a>
                </li>
                <li className={navStyles.navItem}>
                    <a
                        href="#utbildning"
                        className={
                            isActive === "#utbildning" ? navStyles.active : ""
                        }
                    >
                        utbildning
                    </a>
                </li>
                <li className={navStyles.navItem}>
                    <a
                        href="#kontakt"
                        className={
                            isActive === "#kontakt" ? navStyles.active : ""
                        }
                    >
                        {" "}
                        Kontakt
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
