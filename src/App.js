import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import NavBar from './component/NavBar/NavBar'

import * as routes from './constants/routes'
import './App.css';

class App extends Component {
  state = {

  }

  componentDidMount() {

  }
  
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path={routes.ROOT} render={() => <div>ROOT</div>} />
          <Route exact path={routes.HOME} render={() => <div>HOME</div>} />
          <Route exact path={routes.USERS} render={() => <div>USER</div>} />
          <Route exact path={routes.POSTS} render={() => <div>POST</div>} />
          <Route render={() => <div>NOT FOUND</div>} />
        </Switch>
      </div>
    );
  }
}

export default App;
