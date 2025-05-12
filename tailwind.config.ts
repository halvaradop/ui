import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

const config: Config = {
    content: [
        "./ui/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./packages/**/*.{js,ts,jsx,tsx,mdx}",
        "!./node_modules/**",
    ],
    future: {
        hoverOnlyWhenSupported: true,
    },
    theme: {
        extend: {
            screens: {
                base: "900px",
            },
            colors: {
                primary: {
                    DEFAULT: "var(--color-primary)",
                    hover: "var(--color-primary-hover)",
                },
                secondary: {
                    DEFAULT: "var(--color-secondary)",
                    hover: "var(--color-secondary-hover)",
                },
                red: {
                    DEFAULT: "var(--color-red)",
                    hover: "var(--color-red-hover)",
                },
                blue: {
                    DEFAULT: "var(--color-blue)",
                    hover: "var(--color-blue-hover)",
                },
                green: {
                    DEFAULT: "var(--color-green)",
                    hover: "var(--color-green-hover)",
                },
                yellow: {
                    DEFAULT: "var(--color-yellow)",
                    hover: "var(--color-yellow-hover)",
                },
                input: {
                    border: "var(--color-input-border)",
                    background: "var(--color-input-background)",
                },
                modal: "var(--color-modal)",
                ghost: "var(--color-ghost)",
                dialog: "var(--color-dialog)",
                border: {
                    DEFAULT: "var(--color-border-base)",
                    md: "var(--color-border-md)",
                },
                disabled: "var(--color-disabled)",
            },
            textColor: {
                base: "var(--color-base)",
                inverse: "var(--color-inverse)",
            },
            borderColor: {
                base: "var(--color-border-base)",
                md: "var(--color-border-md)",
            },
        },
    },
    plugins: [
        plugin(({ addVariant }) => {
            /**
             * These variants are unstables and may be removed in the future or must be implemented by the user
             */
            addVariant("usinvalid", "&:user-invalid")
            addVariant("usvalid", "&:user-valid")
            addVariant("input-empty", "&:is(:usinvalid:placeholder-shown, :placeholder-shown)")
            addVariant("peer-usinvalid", ".peer:user-invalid ~ &")
            addVariant("peer-usinvalid-empty", ".peer:user-invalid:placeholder-shown ~ &")
        }),
    ],
}

export default config
