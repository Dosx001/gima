/* eslint-disable @typescript-eslint/no-floating-promises */
import { emit } from "@tauri-apps/api/event";
import { For } from "solid-js";
import ResizableBox from "./components/ResizableBox";

const AppOverlay = () => {
  return (
    <div class="mt-4 text-center text-4xl">
      <For each={["-1", "Reset", "+1"]}>
        {(str) => (
          <button
            class="mx-1 rounded border border-t-gray-500 bg-black p-2"
            onClick={() => {
              if (str === "Reset")
                emit("click", {
                  value: 0,
                });
              else if (str === "+1")
                emit("click", {
                  value: 1,
                });
              else
                emit("click", {
                  value: -1,
                });
            }}
          >
            {str}
          </button>
        )}
      </For>
      <ResizableBox />
    </div>
  );
};

export default AppOverlay;
