import { getGesturesIcon } from "../../helpers/get-gestures-icon";
import Gesture from "../../types/gesture";

interface IVersus {
  playerGesture: Gesture;
  computerGesture: Gesture;
}

const Versus = ({ playerGesture, computerGesture }: IVersus) => {
  const PlayerGestureIcon = getGesturesIcon(playerGesture);
  const ComputerGestureIcon = getGesturesIcon(computerGesture);

  return (
    <div class="flex justify-center gap-1 flex-wrap gap-10 items-center">
      <PlayerGestureIcon />
      <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 text-6xl">vs</p>
      <ComputerGestureIcon />
    </div>
  );
};

export default Versus;
