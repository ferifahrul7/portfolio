module.exports = {
    purge: [
        './*.html',
        // './src/**/*.js',
    ],
    darkMode: false, // or 'media' or 'class'
    variants: {
        extend: {},
    },
    theme: {
        extend: {
            colors: {
                "pallete1": "#457b9d",
                "pallette2": "#e63946",
                "pallette3": "#a8dadc",
                "pallette4": "#f1faee",
                "pallette5": "#1d3557"
            }
        },
    },
    plugins: [],
}