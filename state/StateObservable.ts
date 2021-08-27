export class StateObservable<S> {
  private static stateIndex = 0;

  private static eventOptions: AddEventListenerOptions = {
    capture: false,
    once: false,
    passive: true,
  };

  private readonly eventName = `${StateObservable.stateIndex++}-global-state-change`;

  constructor(private _value: S) {}

  get value() {
    return this._value;
  }

  next(value: S) {
    if (value === this._value) {
      return;
    }

    this._value = value;

    if (process.browser) {
      window.dispatchEvent(new Event(this.eventName));
    }
  }

  subscribe(subscriber: (value: S) => void) {
    const eventListener = () => subscriber(this._value);
    const eventName = this.eventName;

    window.addEventListener(
      eventName,
      eventListener,
      StateObservable.eventOptions
    );

    function unsubscribe() {
      window.removeEventListener(
        eventName,
        eventListener,
        StateObservable.eventOptions
      );
    }

    return { unsubscribe };
  }
}
