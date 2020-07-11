module.exports = {
  title: "CSGO",
  tagline: "Learning CS50 with Team CSGO",
  url: "https://cs50-with-csgo.github.io",
  baseUrl: "/csgo/",
  favicon: "img/favicon.ico",
  organizationName: "CS50-with-CSGO", // Usually your GitHub org/user name.
  projectName: "CSGO", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "CSGO",
      logo: {
        alt: "CSGO Logo",
        src: "img/logo.svg",
      },
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        // TODO - Add Contributors Profiles TabLink
        {
          href: "https://github.com/CS50-with-CSGO/csgo",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/doc1/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "CSGO organization",
              href: "https://github.com/CS50-with-CSGO",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Github",
              href: "https://github.com/CS50-with-CSGO/csgo",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CSGO, Inc. Built with Docusaurus v2.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "intro",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/CS50-with-CSGO/csgo/edit/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/CS50-with-CSGO/csgo/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
