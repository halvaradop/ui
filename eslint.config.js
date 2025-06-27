import eslintJs from "@eslint/js"
import eslintTs from "typescript-eslint"
import reactJs from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import jsxA11y from "eslint-plugin-jsx-a11y"
import prettierPlugin from "eslint-plugin-prettier"
import prettierConfig from "eslint-config-prettier"

export default eslintTs.config(
    eslintJs.configs.recommended,
    ...eslintTs.configs.recommended,
    ...eslintTs.configs.stylistic,
    ...eslintTs.configs.recommendedTypeChecked,
    reactJs.configs.flat.recommended,
    reactJs.configs.flat["jsx-runtime"],
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
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            "@typescript-eslint": eslintTs.plugin,
            react: reactJs,
            "react-hooks": reactHooks,
            "jsx-a11y": jsxA11y,
            prettier: prettierPlugin,
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
            // Prettier integration
            "prettier/prettier": "error",

            // React 19 specific rules
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "react/jsx-uses-react": "off",
            "react/no-unknown-property": ["error", { ignore: ["class"] }],
            "react/jsx-no-target-blank": ["error", { allowReferrer: false }],
            "react/jsx-key": ["error", { checkFragmentShorthand: true }],
            "react/jsx-no-leaked-render": "error",
            "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],
            "react/self-closing-comp": "error",

            // React Hooks rules
            ...reactHooks.configs.recommended.rules,
            "react-hooks/exhaustive-deps": "warn",

            // Accessibility rules
            "jsx-a11y/alt-text": "error",
            "jsx-a11y/aria-props": "error",
            "jsx-a11y/aria-proptypes": "error",
            "jsx-a11y/aria-unsupported-elements": "error",
            "jsx-a11y/role-has-required-aria-props": "error",
            "jsx-a11y/role-supports-aria-props": "warn", // Relaxed for custom components
            "jsx-a11y/click-events-have-key-events": "warn",
            "jsx-a11y/no-static-element-interactions": "warn",

            // TypeScript rules
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
            "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],
            "@typescript-eslint/no-import-type-side-effects": "error",
            "@typescript-eslint/prefer-nullish-coalescing": "off", // Requires project info
            "@typescript-eslint/prefer-optional-chain": "off", // Requires project info
            "@typescript-eslint/no-unnecessary-condition": "off", // Requires project info
            "@typescript-eslint/no-unused-expressions": "error",
            "@typescript-eslint/prefer-as-const": "error",
            "@typescript-eslint/no-empty-function": "warn",

            // General JavaScript rules
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
        },
    },
    // Node.js specific files
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
    // Test files
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
    // Storybook files
    {
        files: ["*.stories.{ts,tsx}", "**/*.stories.{ts,tsx}", ".storybook/**/*.{ts,tsx}"],
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/consistent-type-imports": "off",
            "react-hooks/rules-of-hooks": "off",
            "no-console": "off",
        },
    },
    // Global ignores
    {
        ignores: [
            // Dependencies and build outputs
            "**/node_modules/",
            "**/dist/",
            "**/build/",
            "**/.turbo/",
            "**/.cache/",
            "**/coverage/",

            // Storybook and testing
            "**/storybook-static/",
            "**/playwright-report/",
            "**/test-results/",

            // Package-specific ignores
            "packages/*/dist/",
            "packages/*/build/",
            "packages/*/.turbo/",
            "packages/*/.cache/",
            "packages/*/node_modules/",

            // Generated files
            "**/*.cjs",
            "**/*.mjs",
            "**/*.d.ts",
            "**/*.map",

            // Temporary files
            "**/*.tmp",
            "**/*.temp",
            "**/.DS_Store",
            "**/Thumbs.db",

            // IDE files
            "**/.vscode/",
            "**/.idea/",

            // Logs
            "**/*.log",
            "**/logs/",

            // Environment files
            "**/.env*",

            // Don't ignore these specific files
            "!*.config.{js,ts}",
            "!**/*.config.{js,ts}",
            "!.storybook/**/*.{ts,tsx}",

            "eslint.config.js",
        ],
    }
)
