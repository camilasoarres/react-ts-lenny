import { useState } from "react";
import { RegisterForm, UserFormErrors } from "@services/users/types";
import { api } from "@services/users/api";
import Router from "next/router";

export function useRegisterSubmit() {
  const [errorId, setErrorId] = useState<UserFormErrors>();

  async function submitData(registerData: RegisterForm): Promise<void> {
    const { statusCode } = await api.SignUp(registerData);

    if (statusCode !== 201) {
      return setErrorId("RegisterFailed");
    }
  
    setErrorId(undefined);
    Router.push("/login");
  }

  return { errorId, submitData };
}
