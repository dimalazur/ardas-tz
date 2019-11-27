import React, { Component } from 'react';
import FilmsListWrapper from './containers/FilmsListWrapper';
import FilmDetailWrapper from './containers/FilmDetailWrapper';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={FilmsListWrapper} />
            <Route exact path="/film-detail" component={FilmDetailWrapper} />
          </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;