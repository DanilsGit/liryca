export const formatSecondsToMinute = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");
  const secondsWithOutFloat = formattedSeconds.split(".")[0];
  const ZeroSeconds =
    Number(secondsWithOutFloat) < 10
      ? `0${secondsWithOutFloat}`
      : secondsWithOutFloat;

  return `${formattedMinutes}:${ZeroSeconds}`;
};

export const formatMillionsToM_HundredsToK = (number: number) => {
  if (number >= 1000000) {
    return `${(number / 1000000).toFixed(0)}M`;
  } else if (number >= 1000) {
    return `${(number / 1000).toFixed(0)}K`;
  }
  return number;
};
