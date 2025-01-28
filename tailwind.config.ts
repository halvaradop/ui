import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

const config: Config = {
    content: [
        "./ui/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./packages/**/*.{js,ts,jsx,tsx,mdx}",
        "!./node_modules/**",
    ],
    darkMode: "class",
    future: {
        hoverOnlyWhenSupported: true,
    },
    theme: {
        extend: {
            screens: {
                base: "900px",
            },
            colors: {
                primary: "var(--color-primary)",
                "primary-hover": "var(--color-primary-hover)",
                secondary: "var(--color-secondary)",
                "secondary-hover": "var(--color-secondary-hover)",
                "secondary-light": "var(--color-secondary-light)",
                ghost: "var(--color-ghost)",
                background: "var(--color-background)",
                color: {
                    100: "var(--color-color-100)",
                    200: "var(--color-color-200)",
                },
                modal: "var(--color-modal)",
                dialog: "var(--color-dialog)",
                border: "var(--color-border)",
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
            },
        },
    },
    plugins: [
        plugin(({ addVariant }) => {
            addVariant("usinvalid", "&:user-invalid")
            addVariant("usvalid", "&:user-valid")
            addVariant("input-empty", "&:is(:usinvalid:placeholder-shown, :placeholder-shown)")
            addVariant("peer-usinvalid", ".peer:user-invalid ~ &")
            addVariant("peer-usinvalid-empty", ".peer:user-invalid:placeholder-shown ~ &")
        }),
    ],
}

export default config
