import { useStore } from "../../stores/use-store";
import Versus from "../versus";
import { shallow } from "zustand/shallow";

const Result = () => {
  const { result, computerGesture, playerGesture, reset } = useStore(
    (state) => ({
      result: state.result,
      computerGesture: state.computerGesture,
      playerGesture: state.playerGesture,
      reset: state.reset,
    }),
    shallow
  );

  if (!playerGesture || !computerGesture || !result) {
    return;
  }

  return (
    <div class="flex flex-col justify-center gap-1 flex-wrap">
      <Versus computerGesture={computerGesture} playerGesture={playerGesture} />
      <h2 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white mt-20 text-center uppercase">
        {result}
      </h2>
      <button
        type="button"
        class="text-gray-900 mt-20 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        onClick={reset}
      >
        Start again
      </button>
    </div>
  );
};

export default Result;
