import React from 'react';

export default function Square({ squares, handleClick }) {
    return (
        <div className="board">
            {squares.map((square, i) => (
                square === "" ? (
                <button 
                className="square"
                key={i}
                onClick={() => handleClick(i)}
                >
                {square}
                </button>
                ) : (
                    <button
                    className="disabled"
                    key={i}
                    onClick={() => handleClick(i)}
                    >
                    {square}
                    </button>
                )
            ))}
        </div>
    )
}