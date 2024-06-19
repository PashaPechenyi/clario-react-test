"use client";

import { FC, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import InputValidationText from "../shared/InputValidationText";
import {
  containsAllRegisters,
  containsDigit,
  matchesWithMaxLength,
  matchesWithMinLength,
  required,
  validEmail,
  validateField,
} from "../../helpers/validation";
import StatusTextField from "../shared/StatusTextField";
import PasswordTextField from "../shared/PasswordTextField";

type SignUpFormProps = {};

type FieldValidationType = "onBlur" | "onChange" | "onSubmit";

type FormValues = {
  email: string;
  password: string;
};

const defaultValues = {
  email: "",
  password: "",
};

const formValidation = {
  email: {
    validEmail: validEmail,
  },
  password: {
    required: required,
    maxLength: (value: string) => matchesWithMaxLength(value, 64),
    minLength: (value: string) => matchesWithMinLength(value, 8),
    containsAllRegisters: containsAllRegisters,
    containsDigit: containsDigit,
  },
};

const SignUpForm: FC<SignUpFormProps> = ({}) => {
  const [validationType, setValidationType] = useState<
    Record<keyof FormValues, FieldValidationType>
  >({ email: "onChange", password: "onChange" });

  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues,
    mode: "onSubmit",
  });

  const setFieldValidationType = (field: keyof FormValues, type: FieldValidationType) => {
    if (validationType[field] === type) return;
    setValidationType((prev) => ({ ...prev, [field]: type }));
  };

  const onValid = (data: FormValues) => {
    console.log(data);
  };
  const onInvalid = () => {
    setValidationType({ email: "onSubmit", password: "onSubmit" });
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
      onSubmit={handleSubmit(onValid, onInvalid)}
    >
      <Typography variant="h5" sx={{ mb: "20px" }}>
        Sign up
      </Typography>

      <Controller
        name="email"
        control={control}
        rules={{
          validate: formValidation.email,
        }}
        render={({ field }) => {
          const errors = validateField(field.value, formValidation.email);
          const isSuccess = validationType.email !== "onChange" && !errors;
          const isError = validationType.email === "onSubmit" && !!errors;

          return (
            <Box sx={{ width: "100%" }}>
              <StatusTextField
                fullWidth
                placeholder="Email"
                variant="outlined"
                success={isSuccess}
                error={isError}
                {...field}
                onChange={(event) => {
                  field.onChange(event.target.value);
                  setFieldValidationType("email", "onChange");
                }}
                onBlur={() => {
                  field.onBlur();
                  setFieldValidationType("email", "onBlur");
                }}
              />

              {errors && validationType.email === "onSubmit" && (
                <Box sx={{ pl: "20px", mt: "20px" }}>
                  <InputValidationText error={!!errors}>Invalid Email</InputValidationText>
                </Box>
              )}
            </Box>
          );
        }}
      />

      <Controller
        name="password"
        control={control}
        rules={{
          validate: formValidation.password,
        }}
        render={({ field }) => {
          const errors = validateField(field.value, formValidation.password);
          // success state of input should not be applied until user is typing
          const isSuccess = validationType.password !== "onChange" && !errors;
          // error state on input should be applied once user clicks CTA
          const isError = validationType.password === "onSubmit" && !!errors;

          return (
            <Box sx={{ width: "100%" }}>
              <PasswordTextField
                success={isSuccess}
                error={isError}
                fullWidth
                placeholder="Create your password"
                variant="outlined"
                {...field}
                onChange={(event) => {
                  field.onChange(event.target.value);
                  setFieldValidationType("password", "onChange");
                }}
                onBlur={() => {
                  field.onBlur();
                  setFieldValidationType("password", "onBlur");
                }}
              />

              <Box sx={{ pl: "20px", mt: "20px" }}>
                <InputValidationText
                  success={!errors?.minLength && !errors?.maxLength}
                  error={errors?.minLength && validationType.password === "onSubmit"}
                >
                  8 characters or more (no spaces)
                </InputValidationText>
                <InputValidationText
                  success={!errors?.containsAllRegisters}
                  error={errors?.containsAllRegisters && validationType.password === "onSubmit"}
                >
                  Uppercase and lowercase letters
                </InputValidationText>
                <InputValidationText
                  success={!errors?.containsDigit}
                  error={errors?.containsDigit && validationType.password === "onSubmit"}
                >
                  At least one digit
                </InputValidationText>
              </Box>
            </Box>
          );
        }}
      />

      <Button variant="contained" type="submit" sx={{ mt: "20px", width: "240px" }}>
        Sign up
      </Button>
    </Box>
  );
};

export default SignUpForm;
