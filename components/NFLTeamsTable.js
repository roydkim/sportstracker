import React from 'react';
import NFLTeamsRow from './NFLTeamsRow'

function NFLTeamsTable({ nflteams }) {
    return (
        <table id="nflteams">
            <tbody>
                {nflteams.map((nflteam, i) => <NFLTeamsRow nflteam={nflteam} key={i} />)}
            </tbody>
        </table>
    );
}

export default NFLTeamsTable;