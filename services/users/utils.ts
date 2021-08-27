import {
  LoginFormState,
  RegisterFormState,
  RegisterUserData,
  User,
} from "./types";

export function createEmptyUserState(): User {
  return {
    name: "",
    email: "",
  };
}

export function createEmptyLoginFormState(): LoginFormState {
  return {
    email: "",
    password: "",
    errorId: undefined,
    resolved: false,
  };
}

export function createEmptyRegisterFormState(): RegisterFormState {
  return {
    name: "",
    email: "",
    password: "",
    errorId: undefined,
    resolved: false,
  };
}

export function mapUser(user: RegisterFormState): RegisterUserData {
  return {
    username: user.name,
    email: user.email,
    password: user.password,
  };
}
