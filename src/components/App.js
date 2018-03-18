import React from "react";
import { hot } from 'react-hot-loader';

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

import './App.scss';

const App = () => {
  return (
    <div className='main'>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default hot(module)(App);
