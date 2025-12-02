import js from "@eslint/js";
import globals from "globals";
import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  {
    ignores: ["node_modules", ".next", "out"],
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}", "app/**/*.{js,jsx,ts,tsx}", "components/**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@next/next": nextPlugin,
      react: reactPlugin,
      "react-hooks": reactHooks,
    },
    rules: {
      ...nextPlugin.configs["core-web-vitals"].rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/prop-types": "off",
      "react-hooks/set-state-in-effect": "off",
      "@next/next/no-img-element": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["**/*.config.js", "next.config.js", "postcss.config.js", "tailwind.config.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
  },
];
