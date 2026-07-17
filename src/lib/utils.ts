type ClassValue = string | false | null | undefined;

/** Tiny classnames joiner so we don't need a dependency for it. */
export function cx(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
