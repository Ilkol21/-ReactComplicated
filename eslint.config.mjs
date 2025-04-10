import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default defineConfig([
  // JS + TS базовые правила
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: { js },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    extends: ["js/recommended"],
  },

  // TypeScript-специфические правила
  {
    ...tseslint.configs.recommended[0], // так подключаются правила typescript-eslint
    files: ["**/*.{ts,tsx}"],
  },

  // React-правила
  {
    ...pluginReact.configs.flat.recommended,
    files: ["**/*.{jsx,tsx}"],
    settings: {
      react: {
        version: "detect", // Автоматически определяет версию React
      },
    },
  },
]);


