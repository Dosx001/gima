import { WebviewWindow } from "@tauri-apps/api/window";

function App() {
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
          webview
            .once("tauri://created", () => {
              webview.maximize().catch(() => { });
              webview.setAlwaysOnTop(true).catch(() => { });
            })
            .catch((e) => console.error(e));
        }}
      >
        Open Overlay
      </button>
    </div>
  );
}

export default App;
