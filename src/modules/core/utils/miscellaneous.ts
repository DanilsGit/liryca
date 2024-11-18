import TrackPlayer, { State } from "react-native-track-player";

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

export const generateTrackListId = (trackListName: string, search?: string) => {
  return `${trackListName}${`-${search}` || ""}`;
};

export const getListOfErrors = (error: any) => {
  let erroresList = "";
  const errores = Object.keys(error).map((key) => error[key]);
  errores.forEach((error) => {
    erroresList += `${error}\n`;
  });
  return erroresList;
};

export const generateUniqueId = () => {
  const uuid =
    Date.now().toString(36) + Math.random().toString(36).substring(2);
  return uuid;
};

export const formatSecondsToHHMMSS = (seconds: number): string => {
  // Seconds to HH:MM:SS
  const date = new Date(0);
  date.setSeconds(seconds);
  const formatted = date.toISOString().substring(11, 19);
  return formatted;
};

export const getAudioDuration = async (uri) => {
  let duration = "00:00:00";
  let tries = 0;
  // Desactiva el trackPlayer
  await TrackPlayer.reset();
  while (duration === "00:00:00") {
    duration = "00:00:00";
    // Obtiene el estado actual de la reproducción
    if (!State.None) await TrackPlayer.setupPlayer();
    console.log("revisando audio");

    // Añade el archivo como un track
    await TrackPlayer.add({
      id: "temp-audio",
      url: uri, // Usa la URI proporcionada por el DocumentPicker
      title: "Audio Temporal",
      artist: "Desconocido",
    });

    // Obtiene la duración en segundos
    const data = await TrackPlayer.getProgress();
    const durationFormatted = formatSecondsToHHMMSS(data.duration);
    duration = durationFormatted;
    tries += 1;
    if (tries > 10) {
      break;
    }
  }
  return duration;
};

export const sameValueOfKeyInArrayElements = (array: any[], key: string) => {
  const values = array.map((element) => element[key]);
  return values.every((value) => value === values[0]);
};

export const onlyMinutes = (time: string) => {
  const hour = "00:";
  if (time.substring(0, 3) === hour) {
    return time.substring(3);
  }
  return time;
};
