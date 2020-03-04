import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './components/Main';
import Invest from './components/Invest';
import Funding from './components/Funding'; 
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


const Switcher = () => {
  return (
    <Switch>
      <Route exact path='/' component={Main}></Route>
      <Route exact path='/invest' component={Invest}></Route>
      <Route exact path='/funding' component={Funding}></Route>
      <Route exact path='/signin' component={SignIn}></Route>
      <Route exact path='/signup' component={SignUp}></Route>
    </Switch>
  );
}

export default Switcher;