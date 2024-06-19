import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextFieldVariants } from "@mui/material";
import { ForwardedRef, MouseEvent, forwardRef, useState } from "react";
import StatusTextField, { StatusTextFieldProps } from "./StatusTextField";

const PasswordTextField = <Variant extends TextFieldVariants = TextFieldVariants>(
  props: StatusTextFieldProps<Variant>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const color = (() => {
    switch (true) {
      case props.error:
        return "error";
      case props.success:
        return "success";
      default:
        return "primary";
    }
  })();

  return (
    <StatusTextField
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? (
                <VisibilityOff color={color} sx={{ fontSize: "1.4rem" }} />
              ) : (
                <Visibility color={color} sx={{ fontSize: "1.4rem" }} />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
      inputRef={ref}
    />
  );
};

export default forwardRef(PasswordTextField);
