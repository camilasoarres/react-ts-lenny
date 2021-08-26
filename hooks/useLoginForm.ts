import { LoginFormState } from "@services/users/types";
import { createEmptyLoginFormState } from "@services/users/utils";
import { isLoginFormValid } from "@services/users/validation";
import { api } from "@services/users/api";
import { useState } from "react";
import Router from "next/router";

export function useLoginForm() {
  const [loginData, setLoginData] = useState<LoginFormState>(
    createEmptyLoginFormState()
  );

  function updateData(newData: Partial<LoginFormState>) {
    const mergedState = { ...loginData, ...newData };

    const errorId = newData.errorId || isLoginFormValid(mergedState);

    setLoginData({ ...mergedState, errorId });
  }

  async function makeApiRequest() {
    const { statusCode, data} = await api.SignIn(loginData);

    if (statusCode !== 200) {
      return updateData({
        errorId: "LoginFailed",
      });
    }

    updateData({
      resolved: true,
    });

    localStorage.setItem('x-app-user', JSON.stringify(data));
    return Router.push("/dashboard");
  }

  function submitData() {
    updateData({
      resolved: true,
    });

    if (!loginData.errorId) {
      makeApiRequest();
    }
  }

  return { loginData, updateData, submitData };
}
