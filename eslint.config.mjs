import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  
  {
    rules: {
      "no-unused-vars": "error",
      "no-unused-vars-expressions": "error",
      "prefer-const": "error",
      "no-console": "warn",
      "no-undef": "error",
    },
    global: {
      process: "readonly",
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
