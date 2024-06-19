import { TextField, TextFieldProps, TextFieldVariants, outlinedInputClasses } from "@mui/material";
import { ForwardedRef, forwardRef } from "react";

export type StatusTextFieldProps<Variant extends TextFieldVariants = TextFieldVariants> =
  TextFieldProps<Variant> & {
    success?: boolean;
  };

const StatusTextField = <Variant extends TextFieldVariants = TextFieldVariants>(
  { success, error, ...props }: StatusTextFieldProps<Variant>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <TextField
      {...props}
      ref={ref}
      error={error}
      sx={[
        success &&
          ((theme) => ({
            [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: theme.palette.success.main,
              borderWidth: "1px",
            },
            [`& .${outlinedInputClasses.input}`]: {
              color: theme.palette.success.main,
            },
            [`& .${outlinedInputClasses.root}:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderWidth: "1px",
              borderColor: theme.palette.success.main,
            },
          })),

        error &&
          ((theme) => ({
            [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: theme.palette.error.main,
              borderWidth: "1px",
            },
            [`& .${outlinedInputClasses.input}`]: {
              color: theme.palette.error.main,
            },
            [`& .${outlinedInputClasses.root}:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderWidth: "1px",
              borderColor: theme.palette.error.main,
            },
          })),
      ]}
    />
  );
};

export default forwardRef(StatusTextField);
