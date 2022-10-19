import React from 'react';


function toggleFavorite() {
    var btn = document.getElementById('favorite');

    if (btn.style.color === 'red'){
        btn.style.color = 'gray'
    } else {
        btn.style.color = 'red'
    }
}

export default toggleFavorite;