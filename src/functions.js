export const capitalisingFirstLetter = (string) => {
  const firstLetter = string.substring(0, 1);
  const rest = string.substring(1);
  const capitalisedFirstLetter = firstLetter.toUpperCase();
  return `${capitalisedFirstLetter}${rest}`;
};

export const formatTime = (string) => {
  const time = string.substring(0, 10);
  return time
};


