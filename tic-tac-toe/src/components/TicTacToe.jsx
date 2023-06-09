import React, { useState } from 'react';
import Square from './Square';
import GameOver from './GameOver';

const X = "X";
const O = "O";
const winCombo = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

export default function TicTacToe() {
    const [grid, setGrid] = useState(Array(9).fill(""));
    const [player, setPlayer] = useState(true);
    const [endGame, setEndGame] = useState(false);
    const [tie, setTie] = useState(false);

    function handleNewGame() {
        setGrid(Array(9).fill(""));
        setEndGame(false);
        setTie(false);
    }

    return (
        <div>
            <h1>Click a square to begin an epic game of Tic-Tac-Toe!</h1>
            <h2>It is {player ? "Player 1" : "Player 2"}'s turn!</h2>
            {endGame && (
                <GameOver
                player={player}
                tie={tie}
                handleNewGame={handleNewGame}
                />
            )}
            <Square 
            squares={grid}
            handleClick={handleClick}
            />
        </div>
    )
}