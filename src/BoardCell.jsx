import React from 'react';
import X from './assets/X.png';
import O from './assets/O.png';

export function BoardCell(prop) {
    let playerImg = '';
    if (prop.player == 'X') {
        playerImg = X;
    } else if (prop.player == 'O') {
        playerImg = O;
    }
return (
    <div className={`board-cell ${prop.color}`} onClick={(prop.onClick)}>
        <img className='token' src={playerImg}></img>
    </div>
)
}