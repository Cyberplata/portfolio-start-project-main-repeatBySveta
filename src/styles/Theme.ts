
export const theme = {
    colors: {
        primaryBg: "#1F1F20",
        secondaryBg: "#252527",
        accent: "#7572D5",

        font: "#FFFFFF",

        borderColor: "#4A4A4A",  // Добавили общий цвет для границы

        placeholderColor: "#495057"
    },

    media: {
        tablet: "screen and (max-width: 768px)",
        mobile: "screen and (max-width: 576px)",
        desktop: "screen and (min-width: 1140px)", // Если размер экрана будет больше, чем 1140px, то будут применять стили
    },

    animations: {
        transition: "0.2s ease-in-out"
    }
}