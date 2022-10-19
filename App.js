import './App.css';
import nflteams from './data/nfl/nflteams';
import nbateams from './data/nba/nbateams';
import React from 'react';
import { GiBasketballBall } from 'react-icons/gi';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NBAPage from './pages/NBAPage';
import NFLPage from './pages/NFLPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="Fixed-header">
          <GiBasketballBall id="header" className="App-logo" />
          <h1 id="header">sports tracker</h1>
        </header>
        <header className="App-header">
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/NBAPage'>
            <NBAPage nbateams={nbateams}/>
          </Route>
          <Route path='/NFLPage'>
            <NFLPage nflteams={nflteams}/>
          </Route>
          <Route path='/LoginPage'>
            <LoginPage />
          </Route>
        </header>
        <footer className="Fixed-footer">
          <p id="header">© 2022 roy kim</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
