/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  //拡張や改造が必要な場合ココに追記
  //ref:https://tailwindcss.com/docs/customizing-spacing#extending-the-default-spacing-scale
  theme: {
    screens: {
      sm: "561px",
      md: "961px",
      lg: "1024px",
      xl: "1441px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
