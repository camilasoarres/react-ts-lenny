export type UserFormErrors =
  | "InvalidEmail"
  | "InvalidPassword"
  | "RegisterFailed"
  | "EmptyEmail"
  | "EmptyPassword"
  | "LoginFailed"
  | undefined;

export type RegisterUserData = {
  username: string;
  email: string;
  password: string;
};

export type RegisterFormState = {
  name: string;
  email: string;
  password: string;
  errorId?: UserFormErrors;
  resolved?: boolean;
};

export type LoginForm = {
  email: string;
  password: string;
};

export type User = {
  name: string;
  email: string;
};
