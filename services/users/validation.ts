import { isEmailValid, isPasswordValid } from "@utils/validation";
import { LoginFormState, RegisterFormState, UserFormErrors } from "./types";

export function isLoginFormValid(state: LoginFormState): UserFormErrors {
  if (!isEmailValid(state.email)) {
    return "InvalidEmail";
  }

  if (!state.email) {
    return "EmptyEmail";
  }

  if (!state.password) {
    return "EmptyPassword";
  }

  return;
}

export function isRegisterFormValid(state: RegisterFormState): UserFormErrors {
  if (state.email && !isEmailValid(state.email)) {
    return "InvalidEmail";
  }

  if (state.password && !isPasswordValid(state.password)) {
    return "InvalidPassword";
  }

  return;
}
