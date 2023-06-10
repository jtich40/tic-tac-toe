import React from 'react';

export default function GameOver({ winner, tie, X, handleNewGame }) {
    return (
        <div 
        className="flex flex-col justify-center items-center absolute top-0 left-0 w-screen h-screen"
        style={{background: "#000000E5" }}
        >
            {!tie && <h1>{winner === X ? "Player 1" : "Player 2"} Wins!</h1>}
            {tie && <h1>It's a Tie!</h1>}
            <button 
            onClick={handleNewGame}
            className="btn btn-primary mt-3"
            >Start New Game</button>
        </div>
    )
}