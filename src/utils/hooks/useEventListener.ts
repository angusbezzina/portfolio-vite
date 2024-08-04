import React from "react";

import { useCallbackRef } from "./useCallbackRef";

export function useEventListener<EventType extends Event>(
  eventName: Event["type"],
  callback: (event: EventType) => void,
  element: null | HTMLElement | Document | Window = window,
  passive?: boolean,
) {
  const savedHandler = useCallbackRef(callback);

  React.useEffect(() => {
    if (!element) {
      return;
    }

    const eventListener = (event: Event) => savedHandler(event as EventType);
    element.addEventListener(eventName, eventListener, passive ? { passive: true } : undefined);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element, passive, savedHandler]);
}
