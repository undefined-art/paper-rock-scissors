import create from "solid-zustand";
import Gesture from "../types/gesture";
import Result from "../types/result";
import { generateComputerGesture } from "../helpers/generate-computer-gesture";
import { calculateResult } from "../helpers/calculate-result";


interface GameStore {
  playerGesture: Gesture | undefined;
  computerGesture: Gesture | undefined;
  result: Result | undefined;
  play: (gesture: Gesture) => void;
}


export const useStore = create<GameStore>((set) => ({
  playerGesture: undefined,
  computerGesture: undefined,
  result: undefined,
  play: (gesture: Gesture) => {
    const computerGesture = generateComputerGesture();
    const result = calculateResult(gesture, computerGesture);

    set({ playerGesture: gesture, computerGesture, result });
  },
}));
