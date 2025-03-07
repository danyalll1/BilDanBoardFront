interface ValidationOptions {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  email?: boolean;
  phone?: boolean;
}

type TValidationResult<T> = {
  [K in keyof T]: string | null | undefined;
};

type TValidationOptions<T> = { [K in keyof T]?: ValidationOptions };

interface IValidatatorResult<T> {
  errors: boolean;
  validatorFields: TValidationResult<T>;
}

export type {
  ValidationOptions,
  TValidationResult,
  TValidationOptions,
  IValidatatorResult,
};
