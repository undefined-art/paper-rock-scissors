import { useStore } from "../../stores/use-store";
import Gestures from "../gestures";
import RuleIcon from "../../assets/icons/rule.svg";
import Result from "../result";

const PaperRockScissors = () => {
  const state = useStore();

  return (
    <>
      {!state.playerGesture ? (
        <div class="flex flex-col justify-center items-center">
          <RuleIcon />
          <Gestures />
        </div>
      ) : (
        <Result />
      )}
    </>
  );
};

export default PaperRockScissors;
