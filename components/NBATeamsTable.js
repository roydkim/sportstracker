import React from 'react';
import NBATeamsRow from './NBATeamsRow'

function NBATeamsTable({ nbateams }) {
    return (
        <table id="nbateams">
            <tbody>
                {nbateams.map((nbateam, i) => <NBATeamsRow nbateam={nbateam} key={i} />)}
            </tbody>
        </table>
    );
}

export default NBATeamsTable;