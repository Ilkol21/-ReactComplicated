// eslint.config.mjs
import { defineConfig } from "eslint/config";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";
import tsParser from "@typescript-eslint/parser";  // Используем default export

export default defineConfig([
  // TypeScript конфигурация
  {
    files: ["**/*.{ts,tsx}"], // Применяем для файлов с расширениями .ts и .tsx
    languageOptions: {
      parser: tsParser, // Используем default export для парсера
      parserOptions: {
        ecmaVersion: "latest", // Используем последнюю версию ECMAScript
        sourceType: "module", // Указываем модульный тип исходного кода
        project: "./tsconfig.json", // Путь к tsconfig.json
        jsx: true, // Разрешаем JSX
      },
    },
    plugins: {
      "@typescript-eslint": tseslint, // Подключаем плагин для TypeScript
    },
    rules: {
      ...tseslint.configs.recommended.rules, // Рекомендуемые правила для TypeScript
      "@typescript-eslint/no-unused-vars": "warn", // Предупреждения по неиспользуемым переменным
    },
  },

  // React конфигурация
  {
    files: ["**/*.{jsx,tsx}"], // Применяем для файлов с расширениями .jsx и .tsx
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest", // Используем последнюю версию ECMAScript
        sourceType: "module", // Указываем модульный тип исходного кода
        ecmaFeatures: {
          jsx: true, // Разрешаем JSX
        },
      },
    },
    plugins: {
      react: pluginReact, // Подключаем плагин для React
    },
    rules: {
      ...pluginReact.configs.recommended.rules, // Рекомендуемые правила для React
      "react/react-in-jsx-scope": "off", // Для React 17+ не нужно подключать React в JSX
    },
    settings: {
      react: {
        version: "detect", // Автоматически определяем версию React
      },
    },
  },
]);
