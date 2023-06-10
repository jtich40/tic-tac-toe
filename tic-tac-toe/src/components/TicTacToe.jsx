import React, { useState, useEffect } from 'react';
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
    const [winner, setWinner] = useState("");
    const [endGame, setEndGame] = useState(false);
    const [tie, setTie] = useState(false);

    // check for winner or tie after each move, useEffect prevents infinite loop
    useEffect(() => {
        checkEndGame();
    }, [grid, endGame])

    function handleNewGame() {
        setGrid(Array(9).fill(""));
        setEndGame(false);
        setTie(false);
    }


    function handleClick(i) {
        const newGrid = [...grid];
        // prevent overwriting previous moves
        if (newGrid[i] !== "" || endGame) return;
        // set the selected square to X or O
        newGrid[i] = player ? X : O;
        setGrid(newGrid);
        setPlayer(!player);
    }

    function checkEndGame() {
        if (!endGame) {
            for (let i = 0; i < winCombo.length; i++) {
                // destructure the winCombo array
                const [a, b, c] = winCombo[i];
                // check if the grid has a value (X or O) and if the values are equivalent
                if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
                    setEndGame(true);
                    // set the winner based on the value of the first square in the winning combo
                    setWinner(grid[a]);
                    return;
                }
            }
            // check if grid is full without any winning combos
            let roundTie = !grid.includes("");
            if (roundTie) {
                setEndGame(true);
                setTie(true);
            }
        }
    }

    return (
        <div>
            <h1 className="absolute top-20 left-0 right-0 text-4xl">Click a square to start a round of Tic-Tac-Toe</h1>
            <h2 className="text-2xl">{player ? "Player 1" : "Player 2"}'s turn</h2>
            {endGame && (
                <GameOver
                    winner={winner}
                    tie={tie}
                    X={X}
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