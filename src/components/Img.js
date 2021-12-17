import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Img = () => {
    const data = useStaticQuery(graphql`
        query imageQuery {
            allContentfulHero {
                nodes {
                    image {
                        description
                        file {
                            url
                        }
                    }
                }
            }
        }
    `);

    const { image } = data.allContentfulHero.nodes[0];

    return <img src={image.file.url} alt={image.description} />;
};

export default Img;
