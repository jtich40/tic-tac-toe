import React from "react";

export default function Scoreboard({ winCounterX, winCounterO }) {
    return (
        <div className="flex justify-center">
            <div className="bg-slate-500 rounded-3xl drop-shadow w-64 h-40 mt-12">
                <h1 className="text-3xl pt-3">Scoreboard</h1>
                <div className="flex justify-evenly mt-6">
                    <div>
                        <h2 className="underline text-xl">Player 1</h2>
                        <p>{winCounterX}</p>
                    </div>
                    <div>
                        <h2 className="underline text-xl">Player 2</h2>
                        <p>{winCounterO}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}