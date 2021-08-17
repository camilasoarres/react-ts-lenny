import Router from "next/router";
import { useEffect, useState } from "react";
import { UserData } from "./types";
import { isEmailValid, isPasswordValid } from "./validation";

export function useUserData() {
  const [userData, setUserData] = useState<UserData>({});

  function updateData(newData: UserData) {
    const email = newData.email || userData?.email;
    const password = newData.password || userData.password;

    let errorId: typeof userData.errorId = undefined;

    if (email && !isEmailValid(email)) {
      errorId = "InvalidEmail";
    }

    if (password && !isPasswordValid(password)) {
      errorId = "InvalidPassword";
    }

    setUserData({
      ...userData,
      ...newData,
      errorId,
    });
  }

  return { userData, updateData };
}

export function useUser() {
  const key = "x-app-user";

  useEffect(() => {
    const user = process.browser && localStorage.getItem(key);
    if (!user) {
      Router.push("/login");
    }
  }, []);

  function logout() {
    localStorage.removeItem(key);
    Router.push("/login");
  }

  return { logout };
}
