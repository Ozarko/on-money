import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import securityPlugin from "eslint-plugin-security";
import eslintPluginPrettier from "eslint-plugin-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import tailwindcss from "eslint-plugin-tailwindcss";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import eslintPluginReact from "eslint-plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      "node_modules",
      "dist",
      "build",
      "out",
      "coverage",
      ".next",
      "**/*.d.ts",
    ],
  },
  ...compat.extends("next", "prettier"),
  {
    files: ["**/*.tsx", "**/*.ts"],
    plugins: {
      "jsx-a11y": jsxA11y,
      import: importPlugin,
      security: securityPlugin,
      prettier: eslintPluginPrettier,
      "react-hooks": reactHooks,
      tailwindcss: tailwindcss,
      "@typescript-eslint": typescriptEslint,
      react: eslintPluginReact,
    },
    rules: {
      ...jsxA11y.configs.recommended.rules,
      ...securityPlugin.configs.recommended.rules,
      "import/order": [
        "error",
        {
          groups: [
            ["builtin", "external"],
            ["internal"],
            ["parent", "sibling"],
            "index",
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ], // Enforce import order
      "prettier/prettier": [
        "error",
        { endOfLine: "auto", singleQuote: false, parser: "flow" },
      ], // Prettier rules
      "no-unused-vars": ["error"],
      "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
      "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
      "tailwindcss/classnames-order": "warn", // Enforce Tailwind CSS classnames order
      "tailwindcss/no-custom-classname": "off", // Disallow custom classnames
      "prefer-arrow-callback": ["error"], // Prefer arrow callbacks
      "func-style": ["error", "expression"], // Prefer function expressions
      "comma-dangle": ["error", "always-multiline"], // Require trailing commas
      "react/jsx-uses-react": "off", // React 17+ JSX transform
      "react/react-in-jsx-scope": "off", // React 17+ JSX transform
      "react/jsx-uses-vars": "error", // Prevent variables used in JSX from being marked as unused,
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ], // Prevent unused variables but ignore args starting with _
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the react version
      },
    },
  },
];

export default eslintConfig;
