import { heroui } from "@heroui/theme";

export default heroui({
  themes: {
    light: {
      colors: {
        background: "#FFFFFF",
        foreground: "#11181C",
        primary: {
          50: "#f5f5f5",
          100: "#e5e5e5",
          200: "#d4d4d4",
          300: "#a3a3a3",
          400: "#737373",
          500: "#525252",
          600: "#404040",
          700: "#262626",
          800: "#171717",
          900: "#0a0a0a",
          DEFAULT: "#171717",
          foreground: "#FFFFFF",
        },
      },
    },
    dark: {
      colors: {
        background: "#0a0a0a",
        foreground: "#ECEDEE",
        primary: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          DEFAULT: "#FFFFFF",
          foreground: "#000000",
        },
      },
    },
  },
  layout: {
    radius: {
      small: "8px",
      medium: "12px",
      large: "16px",
    },
  },
});
