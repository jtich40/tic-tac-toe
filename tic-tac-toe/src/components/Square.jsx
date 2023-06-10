import React from 'react';

export default function Square({ squares, handleClick }) {
    return (
        <div className="inline-grid grid-cols-3 gap-1 mt-10">
            {squares.map((square, i) => (
                square === "" ? (
                <button 
                className="btn btn-primary btn-lg border-2 border-white aspect-square text-2xl"
                key={i}
                onClick={() => handleClick(i)}
                >
                {square}
                </button>
                ) : (
                    <button
                    className="btn btn-secondary btn-lg border-2 border-white cursor-not-allowed aspect-square "
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