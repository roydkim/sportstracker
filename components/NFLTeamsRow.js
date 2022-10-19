import React from 'react';
import toggleFavorite from './ToggleFavorite';
import { AiFillStar } from 'react-icons/ai';

function NFLTeamsRow({ nflteam }) {
    return (
        <tr>
            <td>
                {nflteam.name}
                <button onclick='toggleFavorite()' id='favorite' class='btn'><AiFillStar /></button>
            </td>
        </tr>
    );
}

export default NFLTeamsRow;