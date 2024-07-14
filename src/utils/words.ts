export function separateFirst(input: string) {
  if (input.length === 0) return;

  const words = input.split(" ");
  const first = words.shift();
  const remaining = words.join(" ");

  return {
    first,
    remaining,
  };
}
export function separateLast(input: string) {
  if (input.length === 0) return;

  const words = input.split(" ");
  const last = words.pop();
  const remaining = words.join(" ");

  return {
    last,
    remaining,
  };
}
