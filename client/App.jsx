import React, {Component} from 'react';

import { Route, Link, Switch } from "react-router-dom";
import Main from './Main.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';

class App extends Component{
  constructor() {
    super();
  }

  render() {
    
      <Switch>
      <Route exact path='/'>
          <Main />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/signup'>
          <SignUp />
        </Route>
      </Switch>


  }
}

export default App;