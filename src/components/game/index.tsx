import { createSignal } from "solid-js";
import Gesture from "../../types/gesture";
import { useStore } from "../../stores/use-store";
import { shallow } from "zustand/shallow";

const PaperRockScissors = () => {
  const [playerGesture, setPlayerGesture] = createSignal<Gesture>();
  const store = useStore();

  const handleGestureSelect = (gesture: Gesture) => {
    setPlayerGesture(gesture);
    store.play(gesture);
  };

  return (
    <div>
      <h1>Game</h1>
      <br />
      <div>
        <button onClick={() => handleGestureSelect(Gesture.Rock)}>Rock</button>
        <button onClick={() => handleGestureSelect(Gesture.Paper)}>
          Paper
        </button>
        <button onClick={() => handleGestureSelect(Gesture.Scissors)}>
          Scissors
        </button>
      </div>
      <div>
        {playerGesture() && (
          <>
            <p>You played {playerGesture()}!</p>
            <p>The computer played {store.computerGesture}!</p>
            <p>You {store.result}!</p>
          </>
        )}
      </div>
    </div>
  );
};

export default PaperRockScissors;
