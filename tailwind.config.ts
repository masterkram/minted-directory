import colors from "tailwindcss/colors";
import typography from "@tailwindcss/typography";

export default {
  darkMode: "class",
  plugins: [typography()],
  theme: {
    extend: {
      fontFamily: {
        display: ["DM Sans"],
      },
      colors: {
        primary: colors.teal,
      },
    },
  },
};
