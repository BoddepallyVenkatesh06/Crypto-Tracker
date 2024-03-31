export const convertDate = (number) => {
  const date = new Date(number);
  return date.getDate() + "/" + (date.getMonth() + 1);
};
