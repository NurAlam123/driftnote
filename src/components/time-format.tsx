"use client";

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

const TimeFormat = ({ time, format }: { time: Date; format: string }) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const userTimeZone = dayjs.tz.guess();

  const localTime = dayjs(time).tz(userTimeZone);
  const formatTime = dayjs(localTime).format(format);

  return (
    <time dateTime={localTime.toISOString()} suppressHydrationWarning>
      {formatTime}
    </time>
  );
};

export default TimeFormat;
