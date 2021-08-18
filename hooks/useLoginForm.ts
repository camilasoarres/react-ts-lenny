import { LoginFormState } from "@services/users/types";
import { createEmptyLoginFormState } from "@services/users/utils";
import { isLoginFormValid } from "@services/users/validation";
import { useState } from "react";

export function useLoginForm() {
  const [loginData, setLoginData] = useState<LoginFormState>(
    createEmptyLoginFormState()
  );

  function updateData(newData: Partial<LoginFormState>) {
    const mergedState = { ...loginData, ...newData };

    const errorId = newData.errorId || isLoginFormValid(mergedState);

    setLoginData({ ...mergedState, errorId });
  }

  function submitData() {
    updateData({
      resolved: true,
    });
  }

  return { loginData, updateData, submitData };
}
