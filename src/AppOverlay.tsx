/* eslint-disable @typescript-eslint/no-floating-promises */
import { invoke } from "@tauri-apps/api";
import { createSignal } from "solid-js";
import ResizableBox from "./components/ResizableBox";

const AppOverlay = () => {
  let box: HTMLDivElement | undefined;
  const [color, setColor] = createSignal("lime");
  return (
    <div class="mt-4 text-center text-4xl">
      <button
        class="mx-1 rounded border border-t-gray-500 bg-black p-2"
        onClick={() => {
          setColor("transparent");
          setTimeout(() => {
            const info = box?.firstElementChild?.getBoundingClientRect();
            invoke("get_text", {
              x: info?.x,
              y: info?.y,
              width: info?.width,
              height: info?.height,
            });
            setColor("lime");
          }, 100);
        }}
      >
        Get Text
      </button>
      <div ref={box}>
        <ResizableBox color={color()} />
      </div>
    </div>
  );
};

export default AppOverlay;
