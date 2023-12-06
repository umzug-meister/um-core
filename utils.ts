export const clearCountry = (str: string) => {
  // prettier-ignore
  return str
      .replace(', Deutschland', '')
      .replace(', Германия', '')
      .replace(', Germany', '');
};
