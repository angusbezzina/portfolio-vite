import React from "react";

export type DebouncedCallback<A extends any[], T> = {
  cancel(): void;
  isScheduled(): boolean;
  (...args: A): T;
};

export interface DebounceOptions {
  /**
   * Should the callback be fired when the component unmounts
   * (if there is one scheduled)
   * @default false
   */
  callOnUnmount?: boolean;
  /**
   * How long to wait in ms until running the callback
   */
  wait: number;
}

export function useDebouncedCallback<A extends any[], T>(
  callback: (...args: A) => T,
  { wait, callOnUnmount = false }: DebounceOptions,
) {
  const callbackRef = React.useRef(callback);
  const argsRef = React.useRef([] as any as A);
  const waitRef = React.useRef(wait);
  const isScheduledRef = React.useRef(false);
  const timeout = React.useRef<ReturnType<typeof setTimeout>>();

  callbackRef.current = callback;
  waitRef.current = wait;

  function cleanup() {
    isScheduledRef.current = false;

    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  }

  function isScheduled() {
    return isScheduledRef.current;
  }

  React.useEffect(() => {
    return () => {
      if (callOnUnmount && isScheduledRef.current) {
        callbackRef.current(...argsRef.current);
        return;
      }

      cleanup();
    };
  }, []);

  const debouncedCallback = React.useCallback((...args: A) => {
    cleanup();
    isScheduledRef.current = true;
    argsRef.current = args;

    timeout.current = setTimeout(() => {
      isScheduledRef.current = false;
      callbackRef.current(...args);
    }, waitRef.current);
  }, []) as any as DebouncedCallback<A, T>;

  debouncedCallback.cancel = cleanup;
  debouncedCallback.isScheduled = isScheduled;

  return debouncedCallback;
}
