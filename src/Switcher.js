import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './components/Main';
import Invest from './components/Invest';
import Funding from './components/Funding'; 
import ModalView from './components/ModalView';
import SignUp from './components/SignUp';
import SignUp2 from './components/SignUp2';
import SignUp3 from './components/SignUp3';
import SignUp4 from './components/SignUp4';
import SignUp5 from './components/SignUp5';
import About from './components/About'; 
import Terms from './components/Terms';


const Switcher = () => {
  return (
    <Switch>
      <Route exact path='/' component={Main}></Route>
      <Route exact path='/imvest' component={Main}></Route>
      <Route exact path='/invest' component={Invest}></Route>
      <Route exact path='/funding' component={Funding}></Route>
      <Route exact path='/signin' component={ModalView}></Route>
      <Route exact path='/signup' component={SignUp}></Route>
      <Route exact path='/signup2' component={SignUp2}></Route>
      <Route exact path='/signup3' component={SignUp3}></Route>
      <Route exact path='/signup4' component={SignUp4}></Route>
      <Route exact path='/signup5' component={SignUp5}></Route>
      <Route exact path='/terms' component={Terms}></Route>
      <Route exact path='/about' component={About}></Route>
    </Switch>
  );
}

export default Switcher;