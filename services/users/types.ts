export type UserFormErrors =
  | "RegisterFailed"
  | "LoginFailed"
  | undefined;

export type RegisterForm = {
  username: string;
  email: string;
  password: string;
};

export type LoginForm = {
  email: string;
  password: string;
};

export type User = {
  name: string;
  email: string;
};
