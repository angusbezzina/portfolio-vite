import React from "react";

import { Textarea, type TextareaProps } from "./textarea";
import { useForwardedRef } from "@utils/hooks/useForwardedRef";
import { useDebouncedCallback } from "@utils/hooks/useDebouncedCallback";
import { useEventListener } from "@utils/hooks/useEventListener";

export interface ExpandableTextareaProps extends TextareaProps {
  maxHeight?: number;
}

const ExpandableTextarea = React.forwardRef<HTMLTextAreaElement, ExpandableTextareaProps>(
  ({ maxHeight = 200, ...props }, ref) => {
    const innerRef = useForwardedRef(ref);
    const debouncedResize = useDebouncedCallback(resize, { wait: 30 });

    function resize() {
      const el = innerRef.current as HTMLTextAreaElement;

      if (!el) {
        return;
      }

      el.style.height = "inherit";
      el.style.height = `${Math.min(el.scrollHeight, maxHeight)}px`;
    }

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (props.onChange) {
        props.onChange(event);
      }

      resize();
    };

    useEventListener("resize", debouncedResize);

    // Call resize on mount
    React.useEffect(() => {
      resize();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Textarea {...props} ref={innerRef} rows={1} onChange={handleChange} />;
  },
);

ExpandableTextarea.displayName = "ExpandableTextarea";

export { ExpandableTextarea };
