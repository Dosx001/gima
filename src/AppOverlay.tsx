/* eslint-disable @typescript-eslint/no-floating-promises */
import { invoke } from "@tauri-apps/api";
import ResizableBox from "./components/ResizableBox";

const AppOverlay = () => {
  let box: HTMLDivElement | undefined;
  return (
    <div class="mt-4 text-center text-4xl">
      <button
        class="mx-1 rounded border border-t-gray-500 bg-black p-2"
        onClick={() => {
          const info = box?.firstElementChild?.getBoundingClientRect();
          invoke("screenshot", {
            x: info?.x,
            y: info?.y,
            width: info?.width,
            height: info?.height,
          });
        }}
      >
        Screenshot
      </button>
      <div ref={box}>
        <ResizableBox />
      </div>
    </div>
  );
};

export default AppOverlay;
