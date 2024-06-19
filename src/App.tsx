import MuiThemeProvider from "./components/providers/MuiThemeProvider";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUp";

function App() {
  return (
    <MuiThemeProvider>
      <CssBaseline />
      <Routes>
        <Route path={"/"} element={<SignUpPage />}></Route>
      </Routes>
    </MuiThemeProvider>
  );
}

export default App;
