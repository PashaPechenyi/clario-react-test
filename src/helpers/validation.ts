import validationPatterns from "../constants/validationPatterns";

type ValidationFunction = (value: string) => boolean;

export function validateField<Keys extends string>(
  value: string,
  validationList: Record<Keys, ValidationFunction>
) {
  return (Object.entries(validationList) as unknown as [Keys, ValidationFunction][]).reduce(
    (acc: Partial<Record<Keys, boolean>> | null, [validationKey, validationFunc]) => {
      const isValidationRuleValid = validationFunc(value);
      if (isValidationRuleValid) return acc;

      return { ...(acc || {}), [validationKey]: true };
    },
    null
  );
}
export function containsDigit(str: string) {
  return validationPatterns.containsDigit.test(str);
}

export function containsAllRegisters(str: string) {
  return validationPatterns.containsAllRegisters.test(str);
}

export function matchesWithMinLength(str: string, minLength: number) {
  return str.length >= minLength;
}

export function matchesWithMaxLength(str: string, maxLength: number) {
  return str.length <= maxLength;
}

export function required(str: string) {
  return !!str.length;
}

export function validEmail(str: string) {
  return validationPatterns.email.test(str);
}
