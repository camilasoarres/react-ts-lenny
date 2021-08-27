import Router from "next/router";
import { useEffect } from "react";
import { useUserState } from "@services/users/hooks";
import { createEmptyUserState } from "@services/users/utils";

export function useUser() {
  const [user, setUser] = useUserState();

  useEffect(() => {
    if (!user.name.length && !user.email.length) {
      Router.push("/login");
    }
  }, []);

  function logout() {
    setUser(createEmptyUserState());
    Router.push("/login");
  }

  return { user, logout };
}
