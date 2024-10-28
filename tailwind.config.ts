import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

const config: Config = {
    content: ["./ui/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "./packages/**/*.{js,ts,jsx,tsx,mdx}"],
    darkMode: "class",
    future: {
        hoverOnlyWhenSupported: true,
    },
    theme: {
        extend: {
            screens: {
                base: "900px",
            },
        },
    },
    plugins: [
        plugin(({ addVariant }) => {
            addVariant("usinvalid", "&:user-invalid")
            addVariant("usvalid", "&:user-valid")
            addVariant("input-empty", "&:is(:usinvalid:placeholder-shown, :placeholder-shown)")
            addVariant("peer-usvalid", ".peer:user-invalid ~ &")
            addVariant("peer-usvalid-empty", ".peer:user-invalid:placeholder-shown ~ &")
        }),
    ],
}

export default config
