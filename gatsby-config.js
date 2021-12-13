require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "labb two",
    },
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `molfw3tuvl43`,
                // Learn about environment variables: https://gatsby.dev/env-vars
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Roboto\:300,400,700`, // you can also specify font weights and styles
                ],
                display: "swap",
            },
        },
    ],
};
