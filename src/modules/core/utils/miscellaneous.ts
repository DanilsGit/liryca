export const formatSecondsToMinute = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");
  const secondsWithOutFloat = formattedSeconds.split(".")[0];
  return `${formattedMinutes}:${secondsWithOutFloat}`;
};
