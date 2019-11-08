import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "amino-ui";

import { store } from "./store";
import "./index.css";
import { App } from "./components/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={DefaultTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
