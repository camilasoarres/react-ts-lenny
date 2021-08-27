import stringify from "safe-stable-stringify";

export class StorageItem<T = any> {
  constructor(public readonly key: string) {}

  get(): T | undefined {
    if (!process.browser) {
      return;
    }
    try {
      const value = window.localStorage.getItem(this.key);
      if (value) {
        return JSON.parse(value);
      }
    } catch (error) {
      console.error(error);
    }
  }

  set(value: T): void {
    if (!process.browser) {
      return;
    }
    try {
      const json = stringify(value);
      window.localStorage.setItem(this.key, json);
    } catch (error) {
      console.error(error);
    }
  }

  remove(): void {
    if (!process.browser) {
      return;
    }
    try {
      window.localStorage.removeItem(this.key);
    } catch (error) {
      console.error(error);
    }
  }
}
