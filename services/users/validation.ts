import { isEmailValid, isPasswordValid } from "@utils/validation";
import { RegisterFormState, UserFormErrors } from "./types";

export function isRegisterFormValid(state: RegisterFormState): UserFormErrors {
  if (state.email && !isEmailValid(state.email)) {
    return "InvalidEmail";
  }

  if (state.password && !isPasswordValid(state.password)) {
    return "InvalidPassword";
  }

  return;
}
