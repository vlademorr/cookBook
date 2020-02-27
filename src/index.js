import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import App from "./components/app";
import ErrorBoundary from "./components/error-boundary";

import store from "./store";

ReactDom.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);
