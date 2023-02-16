export const dateConverter = (date) => {
  return date
            .replace("-", "/")
            .replace("-", "/")
            .slice(0, 10)
            .split("/")
            .reverse()
            .join("/");
};