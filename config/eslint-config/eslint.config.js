import eslint from "@eslint/js"
import eslintTs from "typescript-eslint"
import react from "eslint-plugin-react"
import hooks from "eslint-plugin-react-hooks"
import jsxA11y from "eslint-plugin-jsx-a11y"
import prettierPlugin from "eslint-plugin-prettier"
import prettierConfig from "eslint-config-prettier"
import turbo from "eslint-plugin-turbo"

export const config = eslintTs.config(
    eslint.configs.recommended,
    ...eslintTs.configs.recommended,
    ...eslintTs.configs.stylistic,
    react.configs.flat.recommended,
    react.configs.flat["jsx-runtime"],
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
            },
        },
        plugins: {
            "@typescript-eslint": eslintTs.plugin,
            react,
            "react-hooks": hooks,
            "jsx-a11y": jsxA11y,
            prettier: prettierPlugin,
            turbo,
        },
        settings: {
            react: {
                version: "detect",
            },
            "jsx-a11y": {
                components: {
                    Button: "button",
                    Link: "a",
                },
            },
        },
        rules: {
            "prettier/prettier": "error",
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "react/jsx-uses-react": "off",
            "react/no-unknown-property": ["error", { ignore: ["class"] }],
            "react/jsx-no-target-blank": ["error", { allowReferrer: false }],
            "react/jsx-key": ["error", { checkFragmentShorthand: true }],
            "react/jsx-no-leaked-render": "error",
            "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],
            "react/self-closing-comp": "error",
            ...hooks.configs.recommended.rules,
            "react-hooks/exhaustive-deps": "warn",
            "jsx-a11y/alt-text": "error",
            "jsx-a11y/aria-props": "error",
            "jsx-a11y/aria-proptypes": "error",
            "jsx-a11y/aria-unsupported-elements": "error",
            "jsx-a11y/role-has-required-aria-props": "error",
            "jsx-a11y/role-supports-aria-props": "warn",
            "jsx-a11y/click-events-have-key-events": "warn",
            "jsx-a11y/no-static-element-interactions": "warn",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    argsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    destructuredArrayIgnorePattern: "^_",
                },
            ],
            "@typescript-eslint/consistent-type-imports": [
                "error",
                { prefer: "type-imports", fixStyle: "separate-type-imports" },
            ],
            "@typescript-eslint/no-import-type-side-effects": "error",
            "@typescript-eslint/prefer-nullish-coalescing": "off", // Requires type information
            "@typescript-eslint/prefer-optional-chain": "off", // Requires type information
            "@typescript-eslint/no-unnecessary-condition": "off", // Requires type information
            "@typescript-eslint/no-unused-expressions": "error",
            "@typescript-eslint/prefer-as-const": "error",
            "@typescript-eslint/no-empty-function": "warn",
            "@typescript-eslint/ban-ts-comment": ["error", { "ts-expect-error": "allow-with-description" }],
            "@typescript-eslint/no-non-null-assertion": "warn",
            "no-console": ["warn", { allow: ["warn", "error"] }],
            "no-debugger": "error",
            curly: "error",
            "prefer-const": "error",
            "no-var": "error",
            "object-shorthand": "error",
            "prefer-template": "error",
            "array-callback-return": "error",
            "no-duplicate-imports": "error",
            "no-useless-return": "error",
            eqeqeq: ["error", "always", { null: "ignore" }],
            "turbo/no-undeclared-env-vars": "error",
        },
    },
    {
        files: [
            "scripts/**/*.{js,ts}",
            "*.config.{js,ts}",
            "*.config.*.{js,ts}",
            "**/*.config.{js,ts}",
            "**/tsup.config.{js,ts}",
            "postcss.config.js",
            "vite.config.ts",
            "playwright.config.ts",
            ".storybook/**/*.{js,ts}",
            "tests/**/*.{js,ts}",
            "packages/**/tsup.config.ts",
        ],
        languageOptions: {
            parser: eslintTs.parser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
            },
            globals: {
                console: "readonly",
                process: "readonly",
                Buffer: "readonly",
                __dirname: "readonly",
                __filename: "readonly",
                global: "readonly",
            },
        },
        rules: {
            "no-console": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/consistent-type-imports": "off",
            "@typescript-eslint/no-require-imports": "off",
            "@typescript-eslint/no-var-requires": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "@typescript-eslint/prefer-nullish-coalescing": "off",
            "@typescript-eslint/prefer-optional-chain": "off",
            "@typescript-eslint/no-unnecessary-condition": "off",
            "@typescript-eslint/no-unused-expressions": "off",
            "@typescript-eslint/prefer-as-const": "off",
            "@typescript-eslint/no-empty-function": "off",
        },
    },
    {
        files: ["**/*.test.{ts,tsx}", "**/*.spec.{ts,tsx}", "**/__tests__/**/*.{ts,tsx}"],
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-unused-expressions": "off",
            "@typescript-eslint/no-non-null-assertion": "off",
            "no-console": "off",
            "react-hooks/rules-of-hooks": "off",
        },
    },
    {
        files: ["*.stories.{ts,tsx}", "**/*.stories.{ts,tsx}", ".storybook/**/*.{ts,tsx}"],
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/consistent-type-imports": "off",
            "react-hooks/rules-of-hooks": "off",
            "no-console": "off",
        },
    }
)
