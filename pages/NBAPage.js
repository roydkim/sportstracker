import React from 'react';
import NBATeamsTable from '../components/NBATeamsTable';
import { Link } from 'react-router-dom';

function NBAPage({ nbateams }) {
    return (
        <article>
            <h2>nba teams</h2>
            <p>
                <NBATeamsTable nbateams={nbateams}/>
            </p>

            <p>
                <Link className="App-link" to="/">return home</Link>
            </p>
        </article>
    );
}

export default NBAPage;