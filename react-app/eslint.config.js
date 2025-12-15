import react from "eslint-plugin-react";

export default [
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    rules: {
      "react/prop-types": "off", // Полностью отключаем проверку PropTypes
    },
  },
];
