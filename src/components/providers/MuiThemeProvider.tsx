"use client";

import { FC, ReactNode } from "react";
import { ThemeProvider } from "@mui/material";
import theme from "../../utils/theme";

type TMuiThemeProviderProps = {
  children: ReactNode;
};

const MuiThemeProvider: FC<TMuiThemeProviderProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
