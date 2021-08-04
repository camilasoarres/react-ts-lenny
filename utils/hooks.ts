import { useState } from "react";
import { UserData, UserFormError } from "./types";

export function useUserData() {
  const [userData, setUserData] = useState<UserData>({});
  const [errors, setErrors] = useState<UserFormError>({});

  function updateData(newData: UserData) {
    setUserData({
      ...userData,
      ...newData,
    });
  }

  function isDataValid() {
    return (
      userData.name &&
      !errors.name &&
      userData.email &&
      !errors.email &&
      userData.password &&
      !errors.password
    );
  }

  function updateErrors(newData: UserFormError) {
    setErrors({
      ...errors,
      ...newData,
    });
  }

  return { userData, updateData, isDataValid, errors, updateErrors } as const;
}
