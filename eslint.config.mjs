import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default defineConfig([
  // JS/TS базовые правила
  {
    files: ["**/*.{js,cjs,mjs,ts,tsx,jsx}"],
    plugins: { js },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
    extends: ["plugin:@eslint/js/recommended"],
  },

  // TypeScript рекомендуемые правила
  {
    files: ["**/*.{ts,tsx}"],
    ...tseslint.configs.recommended,
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },

  // React с поддержкой JSX без импорта React
  {
    files: ["**/*.{jsx,tsx}"],
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Не нужен импорт React с React 17+
      "react/display-name": "off",        // Часто мешает при экспортируемых стрелках
    },
  },

  // Jest глобалы в тестах
  {
    files: ["**/*.test.{ts,tsx,js}"],
    languageOptions: {
      globals: globals.jest,
    },
  },
]);
