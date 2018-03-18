import React from "react";
import { AppContainer } from 'react-hot-loader';
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';

import App from "./components/App";
import store from './store';

const render = Component => {
  const MainApp = (
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>
  );

  ReactDOM.render(MainApp, document.getElementById("app"));
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App.js', () => {
    render(require('./components/App'));
  });
}
