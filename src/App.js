import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

import Header from './components/Header';
import Main from './components/Main';
import Invest from './components/Invest';
import Switcher from './Switcher';

function App() {
  return(
    <div className="App" >
      <Header />
      <Switcher />
    </div>
  );
}

export default App;
