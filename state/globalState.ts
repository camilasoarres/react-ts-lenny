import { useEffect, useState } from "react";
import { StateObservable } from "./StateObservable";
import { StorageItem } from "./storage";
import isEqual from "lodash/isEqual";

export function createGlobalState<StateType>(
  state$: StateObservable<StateType>,
  storageKey?: string
) {
  const storage = storageKey
    ? new StorageItem<StateType>(storageKey)
    : undefined;

  function broadcastState(state: StateType) {
    state$.next(state);
    storage?.set(state);
  }

  function broadcastStorageState() {
    const stateValue = state$.value;
    const storageValue = storage?.get();

    if (storageValue !== undefined && !isEqual(stateValue, storageValue)) {
      broadcastState(storageValue);
    }
  }

  if (process.browser) {
    broadcastStorageState();
  }

  return () => {
    const [state, setState] = useState(state$.value);

    useEffect(() => {
      const subscription = state$.subscribe(setState);

      return () => subscription.unsubscribe();
    }, []);

    return [state, broadcastState] as const;
  };
}
