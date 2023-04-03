export const useDate = (value, format = "date") => {
  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  if (format.includes("date")) {
    options.day = "numeric";
    options.month = "numeric";
    options.year = "numeric";
  }

  if (format.includes("time")) {
    options.hour = "numeric";
    options.minute = "numeric";
    options.second = "numeric";
  }

  return new Intl.DateTimeFormat("uk-UK", options).format(value);
};
