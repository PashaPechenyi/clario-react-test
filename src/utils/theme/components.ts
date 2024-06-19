import { ThemeOptions, outlinedInputClasses } from "@mui/material";

const themeComponents: ThemeOptions["components"] = {
  MuiInputBase: {
    styleOverrides: {
      input: {
        padding: "10px 10px 10px 20px",
      },
    },
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        [`& .${outlinedInputClasses.notchedOutline}`]: {
          borderRadius: "10px",
          borderWidth: "0px",
        },
        [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
          borderWidth: "0px",
        },
        [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
          borderWidth: "1px",
        },

        [`&.${outlinedInputClasses.error} .${outlinedInputClasses.input}`]: {
          "&::placeholder": {
            color: theme.palette.error.main,
            opacity: 1,
          },
        },
        borderRadius: "10px",
        backgroundColor: "#fff",
      }),

      input: ({ theme }) => ({
        padding: "10px 10px 10px 20px",
        borderRadius: "10px",

        "&::placeholder": {
          color: theme.palette.primary.main,
          opacity: 1,
        },
      }),
    },
  },

  MuiButton: {
    styleOverrides: {
      sizeMedium: { padding: "15px 32px" },

      contained: {
        color: "#fff",
        borderRadius: "30px",
        background: "linear-gradient(110.46deg, #70C3FF 12.27%, #4B65FF 93.92%)",

        fontFamily: "Inter",
        fontSize: "16px",
        fontWeight: "700",
        lineHeight: "14px",
        textAlign: "center",
      },
    },
  },

  MuiCssBaseline: {
    styleOverrides: (theme) => ({
      body: {
        fontFamily:
          "Open Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
        padding: 0,
        margin: 0,
        backgroundColor: theme.palette.background.default,
      },
    }),
  },
};

export default themeComponents;
