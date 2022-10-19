import React from 'react';
import toggleFavorite from './ToggleFavorite';
import { AiFillStar } from 'react-icons/ai';

function NBATeamsRow({ nbateam }) {
    return (
        <tr>
            <td>
                {nbateam.name}
                <button onclick='toggleFavorite()' id='favorite' class='btn'><AiFillStar /></button>
            </td>
        </tr>
    );
}

export default NBATeamsRow;