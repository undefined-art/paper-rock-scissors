import Gesture from "../types/gesture";
import PaperIcon from "../assets/icons/paper.svg";
import ScissorsIcon from "../assets/icons/scissors.svg";
import RockIcon from "../assets/icons/rock.svg";

export const getGesturesIcon = (gesture: Gesture) =>
  ({
    [Gesture.Paper]: PaperIcon,
    [Gesture.Rock]: RockIcon,
    [Gesture.Scissors]: ScissorsIcon,
  }[gesture]);
