export function clearCountry(str: string) {
  return str
    .replace(", Deutschland", "")
    .replace(", Германия", "")
    .replace(", Germany", "");
}
