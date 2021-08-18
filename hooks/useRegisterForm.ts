import { useState } from "react";
import { RegisterFormState } from "@services/users/types";
import { createEmptyRegisterFormState } from "@services/users/utils";
import { api } from "@services/users/api";
import { isRegisterFormValid } from "@services/users/validation";

export function useRegisterForm() {
  const [userData, setUserData] = useState<RegisterFormState>(
    createEmptyRegisterFormState()
  );

  function updateData(newData: Partial<RegisterFormState>) {
    const mergedState = { ...userData, ...newData };

    const errorId = newData.errorId || isRegisterFormValid(mergedState);

    setUserData({
      ...mergedState,
      errorId,
    });
  }

  async function makeApiRequest() {
    const { statusCode } = await api.SignUp(userData);

    if (statusCode !== 201) {
      return updateData({
        errorId: "RegisterFailed",
      });
    }

    return updateData({ resolved: true });
  }

  function submitData() {
    if (!userData.errorId) {
      makeApiRequest();
    }
  }

  return { userData, updateData, submitData };
}
