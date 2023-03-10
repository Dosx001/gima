/* eslint-disable @typescript-eslint/no-floating-promises */
import { WebviewWindow } from "@tauri-apps/api/window";
import { listen } from "@tauri-apps/api/event";
import { createSignal } from "solid-js";

function App() {
  const [value, setValue] = createSignal(
    Number(localStorage.getItem("value") ?? "0")
  );
  listen("click", (e) => {
    const va = (e.payload as { value: number }).value;
    setValue((v) => {
      v = va === 0 ? 0 : v + va;
      localStorage.setItem("value", v.toString());
      return v;
    });
  });
  return (
    <div class="box">
      <h1 class="mt-4 text-4xl">GIMA</h1>
      <button
        class="rounded border border-black bg-gray-500 p-1 shadow shadow-black"
        onClick={() => {
          const webview = new WebviewWindow("overlay", {
            url: "overlay.html",
            transparent: true,
          });
          webview.once("tauri://created", () => {
            webview.maximize();
            webview.setAlwaysOnTop(true);
          });
          webview.emit("value", { value: value() });
        }}
      >
        Open Overlay
      </button>
      <div class="text-4xl">{value()}</div>
    </div>
  );
}

export default App;
