import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <> 
      <nav> 
         <Link to="/">home</Link>
         <Link to="/NBAPage">list of nba teams</Link>
         <Link to="/NFLpage">list of nfl teams</Link>
      </nav>
    </>
  );
}

export default Navigation;