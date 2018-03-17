import React from "react";
import { hot } from 'react-hot-loader';

import './App.scss';

const App = () => {
  return (
    <div className='main'>
      <p>React here!</p>
    </div>
  );
};

export default hot(module)(App);
