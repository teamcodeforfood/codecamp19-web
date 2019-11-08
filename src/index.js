import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "amino-ui";

import { store } from "./store";
import "./index.css";
import { App } from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { history } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={DefaultTheme}>
        <App />
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
