import "./App.scss";
import { WebviewWindow } from "@tauri-apps/api/window";

function App() {
  return (
    <div class="box">
      <h1 class="mt-4 text-4xl">GIMA</h1>
      <button
        onClick={() => {
          const webview = new WebviewWindow("overlay", {
            url: "overlay.html",
          });
          webview
            .once("tauri://created", () => { })
            .catch((e) => console.error(e));
          webview
            .once("tauri://error", (e) => console.error(e))
            .catch((e) => console.error(e));
        }}
      >
        Open Overlay
      </button>
    </div>
  );
}

export default App;
