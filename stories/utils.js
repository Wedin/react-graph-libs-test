const locale = "sv-SE";

export const dateFormatter = new Intl.DateTimeFormat(locale, {
  month: "short",
  day: "2-digit",
});

export const dateTimeFormatter = new Intl.DateTimeFormat(locale, {
  month: "short",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
});
