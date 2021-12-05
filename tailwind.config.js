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
        fontFamily: {
            Poppins: ["Poppins, sans-serif"]
        },
        container: {
            center: true,
            padding: "1rem",
            screens: {
                lg: "1124px",
                xl: "1124px",
                "2xl": "1124px"
            }
        },
        extend: {
            colors: {
                "biru-kusem": "#457b9d",
                "merah-merona": "#e63946",
                "hijau-tosca": "#a8dadc",
                "putih-kekuningan": "#f1faee",
                "biru-dongker": "#1d3557"
            }
        },
    },
    plugins: [],
}