/* @refresh reload */
import { render } from "solid-js/web";
import App from "./App";
import "./styles/App.scss";
import "./styles/globals.scss";

render(() => <App />, document.getElementById("root") as HTMLElement);
