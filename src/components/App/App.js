import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import ThankYou from '../ThankYou/ThankYou';
import Home from '../Home/Home'
import Admin from '../Admin/Admin'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <Router>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/feeling'>
            <Feeling />
          </Route>
          <Route path='/understanding'>
            <Understanding />
          </Route>
          <Route path='/supported'>
            <Supported />
          </Route>
          <Route path='/comments'>
            <Comments />
          </Route>
          <Route path='/review'>
            <Review />
          </Route>
          <Route path='/thankyou'>
            <ThankYou />
          </Route>
          <Route path='/admin'>
            <Admin />
          </Route>
        </Router>
        <br />
      </div>
    );
  }
}

export default App;
