import Router from "next/router";
import { useEffect, useState } from "react";
import { RegisterUserData } from "@services/users/types";

export function useUser() {
  const [user, setUser] = useState<RegisterUserData>();

  const key = "x-app-user";

  useEffect(() => {
    const storageUser = localStorage.getItem(key);

    if (storageUser) {
      setUser(JSON.parse(storageUser));
    } else {
      Router.push("/login");
    }
  }, []);

  function logout() {
    localStorage.removeItem(key);
    Router.push("/login");
  }

  return { user, logout };
}
