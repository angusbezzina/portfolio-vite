export function separateFirst(input: string) {
  const usePeriod = input.includes(".");
  const words = usePeriod ? input.split(".") : input.split(" ");
  const first = words.shift();
  const remaining = usePeriod ? `.${words.join(".")}` : words.join(" ");

  return {
    first,
    remaining,
  };
}
export function separateLast(input: string) {
  const usePeriod = input.includes(".");
  const words = usePeriod ? input.split(".") : input.split(" ");
  const last = words.pop();
  const remaining = usePeriod ? `${words.join(".")}.` : words.join(" ");

  return {
    last,
    remaining,
  };
}
