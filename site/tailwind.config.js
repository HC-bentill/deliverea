const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#53ABF6',
                accent: '#FF6150',
                dark: '#162638',
                screen: '#E6EBF2'
            },
            fontFamily: {
                sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
                exo: ['Exo', ...defaultTheme.fontFamily.sans]
            },
            backgroundImage: theme => ({
                'hero-gradient': "url('/assets/images/Ma.png')",
            })
        },
        plugins: [],
    }
}
