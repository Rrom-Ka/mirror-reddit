export function timeAgo(utc?: Date) {
  const dataNaw = Math.floor(Date.now() / 1000);
  const timeAgoSeconds = dataNaw - Number(utc);
  const timeAgoMinuts = timeAgoSeconds % 60;
  const timeAgoHouer = Math.round(timeAgoSeconds / 60 / 60);
  const timeDays = timeAgoSeconds / 3600 / 24;
  const timeAgoDays =
    Math.floor(timeDays) >= 1 ? Math.round(timeDays) : Math.floor(timeDays);
  if (timeAgoDays >= 1) return `${timeAgoDays} д. назад`;
  if (timeAgoHouer > 0) return `${timeAgoHouer} ч. назад`;
  return `${timeAgoMinuts} мин. назад`;
}