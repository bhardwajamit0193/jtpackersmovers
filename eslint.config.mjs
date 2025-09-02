import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
          'react/no-unescaped-entities': 'off',
       "@next/next/no-img-element": "off",
      "@next/next/no-css-tags": "off",        // ✅ disable CSS link warnings
      "@next/next/no-page-custom-font": "off" // ✅ disable font warnings
    },
  },
];

export default eslintConfig;
