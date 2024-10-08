module.exports = {
  plugins: [
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
    [
      "@fullhuman/postcss-purgecss",
      {
        content: ["./src/**/*.{js,jsx,ts,tsx}"],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: {
          standard: [
            /* Preset */
            /html/,
            /body/,

            /blockquote/,

            /* React-Bootstrap */
            // Collapse
            /collapse$/,
            /collapsing$/,
            // Offcanvas
            /offcanvas$/,
            /offcanvas-(?:header|body)$/, // Components
            /offcanvas-(?:md)$/, // Responsiveness
            /offcanvas-(?:top)$/, // Direction
          ],
          deep: [],
          greedy: [
            /* Transitions */
            /fade/,
            /show/,
          ],
        },
      },
    ],
  ],
};
