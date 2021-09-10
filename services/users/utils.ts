import {
  User,
} from "./types";

export function createEmptyUserState(): User {
  return {
    name: "",
    email: "",
  };
}
