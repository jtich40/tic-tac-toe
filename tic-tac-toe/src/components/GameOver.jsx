import React from 'react';

export default function GameOver({ player, tie, handleNewGame }) {
    return (
        <div className="gameover">
            {!tie && <h1>{player ? "Player 1" : "Player 2"} Wins!</h1>}
            {tie && <h1>It's a Tie!</h1>}
            <button onClick={handleNewGame}>Start New Game</button>
        </div>
    )
}