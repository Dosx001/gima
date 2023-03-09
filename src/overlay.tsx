import { For } from "solid-js";
import { render } from "solid-js/web";
import "./styles/globals.scss";

render(
  () => (
    <div class="mt-4 text-center text-4xl">
      <For each={[-1, 0, 1]}>
        {(num) => (
          <button class="mx-1 rounded border border-t-gray-500 bg-black p-2">
            {num}
          </button>
        )}
      </For>
    </div>
  ),
  document.getElementById("root") as HTMLElement
);
