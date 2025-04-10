import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default defineConfig([
  // JavaScript правила
  {
    files: ["**/*.{js,cjs,mjs,ts,tsx,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      js,
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },

  // TypeScript
  {
    files: ["**/*.{ts,tsx}"],
    ...tseslint.configs.recommended,
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },

  // React
  {
    files: ["**/*.{jsx,tsx}"],
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/display-name": "off",
    },
  },

  // Jest (для тестов)
  {
    files: ["**/*.test.{ts,tsx,js}"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
]);
