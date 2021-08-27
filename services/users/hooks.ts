import { createGlobalState } from "state/globalState";
import { StateObservable } from "state/StateObservable";
import { User } from "./types";
import { createEmptyUserState } from "./utils";

const userState$ = new StateObservable<User>(createEmptyUserState());

export const useUserState = createGlobalState(userState$, "x-user-data");
