import Gesture from "../types/gesture";

export const generateComputerGesture = () => {
  const gestures = [Gesture.Paper, Gesture.Rock, Gesture.Scissors];
  const index = Math.floor(Math.random() * gestures.length);

  return gestures[index];
};
