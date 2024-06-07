module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "prettier",
    "airbnb",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".ts", ".tsx"],
      },
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to"],
      },
    ],
    "import/extensions": [
      "error",
      {
        ts: "never",
        tsx: "never",
      },
    ],
    "import/no-unresolved": 0,
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "eslint/no-use-before-define": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-no-constructed-context-values": "off",
    "@typescript-eslint/no-empty-function": "off",
    "jsx-quotes": ["error", "prefer-single"],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
      },
    ],
    "arrow-body-style": ["error", "always"],
  },
  ignorePatterns: ["cypress.config.ts"],
};
