import React from "react";

import * as navStyles from "../styles/navigation.module.css";
import * as generalStyles from "../styles/general.module.css";

const Navigation = () => {
    const isActive = window.location.hash;
    console.log(isActive);

    return (
        /* nav will be the wrapper/ container */
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
                    <a href="https://www.google.se">Kompetenser</a>
                </li>
                <li className={navStyles.navItem}>
                    <a href="https://www.google.se">Arbetslivserfarenhet</a>
                </li>
                <li className={navStyles.navItem}>
                    <a href="https://www.google.se">utbildning</a>
                </li>
                <li className={navStyles.navItem}>
                    <a href="https://www.google.se">Kontakt</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
