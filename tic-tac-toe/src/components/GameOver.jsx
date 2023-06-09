import React from 'react';

export default function GameOver({ winner, tie, X, handleNewGame }) {
    return (
        <div className="gameover">
            {!tie && <h1>{winner === X ? "Player 1" : "Player 2"} Wins!</h1>}
            {tie && <h1>It's a Tie!</h1>}
            <button onClick={handleNewGame}>Start New Game</button>
        </div>
    )
}