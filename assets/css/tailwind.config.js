module.exports = {
  content: ["layouts/**/*.html", "content/**/*.md"],
  safelist: [
    "modal-active",
    "bg-carlo",
    "bg-sky",
    "bg-flower",
    "bg-red",
    "bg-lightRed",
    "bg-salmon",
    "bg-lightBlue",
    "bg-jelly",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",

      black: "#040419",
      white: "#FFFFFF",

      gray: {
        100: "#f7fafc",
        200: "#edf2f7",
        300: "#e2e8f0",
        400: "#cbd5e0",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#2d3748",
        900: "#1a202c",
      },

      sky: "#29AAE2",
      blue: "#0D3B66",
      lightBlue: "#BAEBF4",
      jelly: "#247BA0",

      sand: "#FFFFF0",
      sunset: "#F7AE70",
      salmon: "#FF8360",

      java: "#1D958D",
      carlo: "#73BFB8",
      flower: "#B9E3C6",

      red: "#E53E3E",
      lightRed: "#FFDDF2",

      discord: "#5865F2",
      facebook: "#39599F",
      github: "#6CC644",
      mastodon: "#6364FF",
      twitter: "#55ACEE",
      youtube: "#FF0000",
      reddit: "#FF5700",
      instagram: "#405DE6",
      rss: "#ef9438",
    },
  },
  variants: {},
  plugins: [],
};
