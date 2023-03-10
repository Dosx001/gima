import { render } from "solid-js/web";
import AppOverlay from "./AppOverlay";
import "./styles/globals.scss";

render(() => <AppOverlay />, document.getElementById("root") as HTMLElement);
