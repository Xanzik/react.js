import react from "eslint-plugin-react";

export default [
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    rules: {
      "react/prop-types": off,
    },
  },
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
];
