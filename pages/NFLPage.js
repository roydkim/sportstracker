import React from 'react';
import NFLTeamsTable from '../components/NFLTeamsTable';
import { Link } from 'react-router-dom';

function NFLPage({ nflteams }) {
    return (
        <article>
            <h2>nfl teams</h2>
            <p>
                <NFLTeamsTable nflteams={nflteams}/>
            </p>

            <p>
                <Link className="App-link" to="/">return home</Link>
            </p>
        </article>
    );
}

export default NFLPage;