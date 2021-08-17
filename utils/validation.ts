export const isEmailValid = (email: string): boolean => {
  const expression =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return expression.test(email.toLowerCase());
};

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
