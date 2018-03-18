import React from "react";
import { AppContainer } from 'react-hot-loader';
import ReactDOM from "react-dom";

import App from "./components/App";

const render = Component => {
  const MainApp = (
    <AppContainer>
      <Component />
    </AppContainer>
  );

  ReactDOM.render(MainApp, document.getElementById("app"));
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App.js', () => {
    render(require('./components/App'));
  });
}
