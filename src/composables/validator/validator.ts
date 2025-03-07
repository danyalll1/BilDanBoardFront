import type {
  ValidationOptions,
  TValidationResult,
  TValidationOptions,
  IValidatatorResult,
} from "./types";

export class Validator<T> {
  private fields: T;
  private fieldsRules: TValidationOptions<T>;
  public validatorResult: IValidatatorResult<T>;

  constructor(object: T, fieldsRules: TValidationOptions<T>) {
    this.fields = object;
    this.fieldsRules = fieldsRules;
    this.validatorResult = {
      errors: false,
      validatorFields: {} as TValidationResult<T>,
    };
  }

  private validateFieldFunction = (
    value: any,
    options: ValidationOptions,
  ): string | null => {
    if (
      options.required &&
      (value === null || value === "" || value === false)
    ) {
      return "Это обязательное поле";
    } else if (options.required && typeof value === "object" && !value.length) {
      return "Это обязательное поле";
    }

    if (options.minLength && value.length < options.minLength) {
      return `Минимальная длина ${options.minLength} символов.`;
    }

    if (options.maxLength && value.length > options.maxLength) {
      return `Максимальная длина ${options.maxLength} символов.`;
    }

    if (
      options.email &&
      value !== "" &&
      !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)
    ) {
      return "Неверный формат email";
    }

    if (options.phone && !/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(value)) {
      return "Неверный формат номера телефона";
    }

    return null;
  };

  private checkErrors() {
    for (const field in this.fields) {
      if (this.fieldsRules[field]) {
        const error = this.validateFieldFunction(
          this.fields[field],
          this.fieldsRules[field]!,
        );
        if (error) {
          this.validatorResult.errors = true;
          break;
        } else {
          this.validatorResult.errors = false;
        }
      }
    }
  }

  public validate(): IValidatatorResult<T> {
    this.validatorResult.errors = false;
    for (const field in this.fields) {
      if (this.fieldsRules[field]) {
        const error = this.validateFieldFunction(
          this.fields[field],
          this.fieldsRules[field]!,
        );
        if (error) {
          this.validatorResult.validatorFields[field] = error;
          this.validatorResult.errors = true;
        } else {
          this.validatorResult.validatorFields[field] = null;
        }
      }
    }
    return this.validatorResult;
  }

  public validateField(fieldName: keyof T): IValidatatorResult<T> {
    const error = this.validateFieldFunction(
      this.fields[fieldName],
      this.fieldsRules[fieldName]!,
    );
    if (error) {
      this.validatorResult.validatorFields[fieldName] = error;
    } else {
      this.validatorResult.validatorFields[fieldName] = null;
    }
    this.checkErrors();
    return this.validatorResult;
  }
}
