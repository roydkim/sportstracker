import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <article>
                <p>
                    <Link className="App-link" to="/NBApage">nba list</Link>
                </p>
                <p>
                    <Link className="App-link" to="/NFLpage">nfl list</Link>
                </p>
                <p>
                    <Link className="App-link" to="/LoginPage">log in</Link>
                </p>
        </article>
    );
}

export default HomePage;