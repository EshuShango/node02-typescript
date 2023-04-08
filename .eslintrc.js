module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb-base",
    "plugin:prettier/recommended",
    "plugin:import/typescript",
    "plugin:import/errors",
    "plugin:import/warnings",
    
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier", "import"],
  rules: {
    "double-quotes": "on",
    "prettier/prettier": "error",
    "import/extensions": "on",
    "no-console": "off",
    //^below: these guidelines for import order is not structured
    "import/order": [
      "error",
      {
        "newlines-between": "never",
        groups: [
          ["builtin", "external"],
          ["internal", "parent", "sibling", "index"],
        ]
      }
    ],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types`
        // directory even it doesn't contain any source code, like `@types/unist`
        // choose from one of the "project" configs below or onit to use <root>tsconfig.json by default

        //use <root>/path/to/folder/tsconfig.json
        project: "./tsconfig.json",
      },
    },
  },
   
};

/* 
import add from '../../math/add';
//^below: is absolute path and looks cleaner
import add from '@src/math/add';

 */