export const dateConverter = (date) => {
  return new Date(date)
                      .toLocaleDateString()
                      .replace(".", "/")
                      .replace(".", "/");
};