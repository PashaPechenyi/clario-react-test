import { FC } from "react";
import { Box } from "@mui/material";
import SignUpForm from "../components/forms/SignUp";
import theme from "../utils/theme";

type SignUpPageProps = {};

const SignUpPage: FC<SignUpPageProps> = ({}) => {
  return (
    <Box
      sx={() => ({
        width: "100%",
        height: "100vh",
        overflow: "auto",
        display: "flex",
        justifyContent: "center",
        background: `linear-gradient(167.96deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
      })}
    >
      <Box
        sx={{
          pt: "138px",
          px: "30px",
          maxWidth: "500px",
          width: "100%",
          backgroundImage: `url("${require("../assets/images/backgroundStars.png")}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 57px",
        }}
      >
        <SignUpForm />
      </Box>
    </Box>
  );
};

export default SignUpPage;
