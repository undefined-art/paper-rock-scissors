import type { JSX } from "solid-js";
import { getGesturesIcon } from "../../helpers/get-gestures-icon";
import { IGesture } from "../gestures";

interface ICard {
  onClick: JSX.EventHandler<HTMLDivElement, MouseEvent>;
  gesture: IGesture;
}

const Card = ({ onClick, gesture: { name, details } }: ICard) => {
  const Icon = getGesturesIcon(name);

  return (
    <div
      data-gesture={name}
      class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer shadow-lg hover:saturate-200"
      onClick={onClick}
      role="presentation"
    >
      <Icon />
      <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mt-10 uppercase">
        {name}
      </h5>
      <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 text-base">{details}</p>
    </div>
  );
};

export default Card;
