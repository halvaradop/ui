/**
 * @type {import("prettier").Config}
 */
export const config = {
    semi: false,
    tabWidth: 4,
    printWidth: 120,
    trailingComma: "es5",
    overrides: [
        {
            files: ["*.json", "*.md", "*.yaml", "*.yml"],
            options: {
                tabWidth: 2,
            },
        },
    ],
}

export default config
