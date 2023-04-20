import type { Component } from "solid-js";
import PaperRockScissors from "./components/game";

const App: Component = () => {
  return (
    <div class="bg-background min-h-screen w-screen flex justify-center gap-1 flex-wrap content-center overflow-y-hidden pb-10 w-100">
      <PaperRockScissors />
    </div>
  );
};

export default App;
