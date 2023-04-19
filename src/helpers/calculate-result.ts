import Gesture from "../types/gesture";
import Result from "../types/result";

export const calculateResult = (
  playerGesture: Gesture,
  computerGesture: Gesture
) => {
  if (playerGesture === computerGesture) {
    return Result.Draw;
  }

  if (
    (playerGesture === Gesture.Paper && computerGesture === Gesture.Rock) ||
    (playerGesture === Gesture.Rock && computerGesture === Gesture.Scissors) ||
    (playerGesture === Gesture.Scissors && computerGesture === Gesture.Paper)
  ) {
    return Result.Win;
  } else {
    return Result.Lose;
  }
};
