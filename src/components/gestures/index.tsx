import { useStore } from "../../stores/use-store";
import Gesture from "../../types/gesture";
import Card from "../card";
import { JSX } from "solid-js";

export interface IGesture {
  name: Gesture;
  details: string;
}

const gestures: IGesture[] = [
  {
    name: Gesture.Rock,
    details:
      "The power of rock is its strength and durability. Rock can crush or break scissors, but is itself vulnerable to being covered or wrapped by paper.",
  },
  {
    name: Gesture.Paper,
    details:
      "The power of paper lies in its versatility and ability to cover or wrap other objects. Paper can wrap and contain rock, but is itself vulnerable to being cut by scissors.",
  },
  {
    name: Gesture.Scissors,
    details:
      "The power of scissors is their sharpness and ability to cut through other materials. Scissors can cut through paper, but are themselves vulnerable to being blunted or bludgeoned by rock.",
  },
];

const Gestures = () => {
  const { play } = useStore();

  const handleGestureSelect: JSX.EventHandler<HTMLDivElement, MouseEvent> = (
    event
  ) => {
    const gesture = event.currentTarget.dataset.gesture as Gesture;

    play(gesture);
  };

  return (
    <div class="flex justify-center gap-2 flex-wrap mt-20">
      {gestures.map((gesture) => (
        <Card onClick={handleGestureSelect} gesture={gesture} />
      ))}
    </div>
  );
};

export default Gestures;
