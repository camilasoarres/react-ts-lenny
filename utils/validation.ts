export const isEmailValid: RegExp = /^\S+@\S+\.\S\S+$/;

export const isPasswordValid = (password: string): boolean => {
  const lower = /([a-z])/;
  const upper = /([A-Z])/;
  const numbers = /([0-9])/;
  const special = /([^a-zA-Z0-9])/;

  if (
    !password.match(lower) ||
    !password.match(upper) ||
    !password.match(numbers) ||
    !password.match(special)
  ) {
    return false;
  }

  return true;
};
