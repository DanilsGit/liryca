import {
  Event,
  useActiveTrack,
  useTrackPlayerEvents,
} from "react-native-track-player";
import { addTrackToPlaybackRequest } from "../api/main";
import { useAuth } from "@/modules/auth/hooks/useAuth";

const evets = [
  Event.PlaybackState,
  Event.PlaybackError,
  Event.PlaybackActiveTrackChanged,
];

export const useLogTrackPlayerState = () => {
  const activeTrack = useActiveTrack();
  const { user } = useAuth();
  useTrackPlayerEvents(evets, async (event) => {
    if (event.type === Event.PlaybackError) {
      console.warn("An error occurred while playing the current track.", event);
    }

    if (event.type === Event.PlaybackState) {
      if (event.state === "ready") {
        console.log("Track is ready to play", activeTrack.id);
        try {
          await addTrackToPlaybackRequest(user.token, {
            song_id: activeTrack.id,
          });
        } catch (error) {
          console.log(error);
        }
      }
    }

    if (event.type === Event.PlaybackActiveTrackChanged) {
      console.log("Active track changed", event.index);
    }
  });
};
