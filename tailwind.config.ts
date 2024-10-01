import colors from "tailwindcss/colors";
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";

export default {
  darkMode: "class",
  plugins: [typography(), forms(), require("@tailwindcss/line-clamp")],
  theme: {
    extend: {
      fontFamily: {
        display: ["DM Sans"],
      },
      colors: {
        primary: colors.sky,
        secondary: colors.indigo,
        gray: colors.zinc,
      },
    },
  },
};
