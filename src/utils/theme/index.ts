import { createTheme } from "@mui/material";
import themePalette from "./palette";
import themeComponents from "./components";
import themeTypography from "./typography";

const theme = createTheme({
  palette: themePalette,
  components: themeComponents,
  typography: themeTypography,
});

export default theme;
