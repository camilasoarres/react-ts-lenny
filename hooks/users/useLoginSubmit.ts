import { LoginForm, UserFormErrors } from "@services/users/types";
import { api } from "@services/users/api";
import { useState } from "react";
import Router from "next/router";
import { useUserState } from "@services/users/hooks";

export function useLoginSubmit() {
  const [, setUser] = useUserState();
  const [errorId, setErrorId] = useState<UserFormErrors>();

  async function submitData(loginData: LoginForm): Promise<void> {
    const { statusCode, data } = await api.SignIn(loginData);

    if (statusCode !== 200) {
      return setErrorId("LoginFailed");
    }

    setUser({ ...data, name: data.username });
    setErrorId(undefined);
    Router.push("/dashboard");
  }

  return { errorId, submitData };
}
