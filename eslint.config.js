// @ts-check
import eslintJs from "@eslint/js"
import eslintTs from "typescript-eslint"
import reactJs from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import prettierPlugin from "eslint-plugin-prettier"
import prettierConfig from "eslint-config-prettier"

export default eslintTs.config(
    eslintJs.configs.recommended,
    ...eslintTs.configs.recommended,
    prettierConfig,
    {
        files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
        languageOptions: {
            parser: eslintTs.parser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
                projectService: {
                    allowDefaultProject: ["*.js", "*.mjs", "*.cjs"],
                },
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            "@typescript-eslint": eslintTs.plugin,
            react: reactJs,
            "react-hooks": reactHooks,
            prettier: prettierPlugin,
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            "prettier/prettier": "error",
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "react/jsx-uses-react": "off",
            "react/no-unknown-property": ["error", { ignore: ["class"] }],
            ...reactHooks.configs.recommended.rules,
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    argsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                },
            ],
            "@typescript-eslint/consistent-type-imports": "error",
            "@typescript-eslint/no-import-type-side-effects": "error",
            "no-console": ["warn", { allow: ["warn", "error"] }],
            "no-debugger": "error",
            curly: "error",
            "prefer-const": "error",
            "no-var": "error",
        },
    },
    {
        files: ["**/*.test.{ts,tsx}", "**/*.spec.{ts,tsx}", "**/__tests__/**/*.{ts,tsx}"],
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
            "no-console": "off",
        },
    },
    {
        files: ["*.config.{js,ts}", "*.config.*.{js,ts}", "**/*.config.{js,ts}"],
        languageOptions: {
            parser: eslintTs.parser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                allowDefaultProject: true,
            },
        },
        rules: {
            "no-console": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/consistent-type-imports": "off",
        },
    },
    {
        files: ["*.stories.{ts,tsx}", "**/*.stories.{ts,tsx}", ".storybook/**/*.{ts,tsx}"],
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
            "react-hooks/rules-of-hooks": "off",
        },
    },
    {
        ignores: [
            "node_modules/",
            "dist/",
            "build/",
            ".turbo/",
            ".cache/",
            "storybook-static/",
            "playwright-report/",
            "test-results/",
            "packages/*/dist/",
            "packages/*/build/",
            "packages/*/.turbo/",
            "packages/*/.cache/",
            "packages/*/node_modules/",
            "**/*.cjs",
            "**/*.mjs",
            "!*.config.{js,ts}",
            "!**/*.config.{js,ts}",
            "!.storybook/**/*.{ts,tsx}",
            "eslint.config.js",
        ],
    }
)
