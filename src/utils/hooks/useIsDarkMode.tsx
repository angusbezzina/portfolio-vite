import React from "react";

export function useIsDarkMode() {
  const [isDarkMode, setIsDarkMode] = React.useState(
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return isDarkMode;
}
