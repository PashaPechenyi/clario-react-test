import { FC } from "react";
import { Typography, TypographyProps } from "@mui/material";

type InputValidationTextProps = TypographyProps & {
  error?: boolean;
  success?: boolean;
};

const InputValidationText: FC<InputValidationTextProps> = ({
  children,
  color: defaultColor,
  error,
  success,
  ...props
}) => {
  const color = (() => {
    switch (true) {
      case error:
        return "error";
      case success:
        return "success";
      default:
        return null;
    }
  })();

  return (
    <Typography
      {...props}
      variant="body2"
      sx={(theme) => ({ color: color && theme.palette[color].main })}
    >
      {children}
    </Typography>
  );
};

export default InputValidationText;
