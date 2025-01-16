import { react, useState, useEffect } from "react";
import { BoardCell } from "./BoardCell";
import { calculateBoardState } from "./util";

export function Board(props) {

    const xImg = './assets/X.png';
    const oImg = './assets/O.png';
    const [ squares, setSquares ] = useState ([
        undefined, undefined, undefined,
        undefined, undefined, undefined,
        undefined, undefined, undefined
    ])

    const [ player, setPlayer ] = useState ("X");


    const boardState = calculateBoardState(squares);

    const handleClick = (index) => {
        const newBoard= squares.map((square, i) => {
            if (i == index && square == undefined) {
                return player
            }
            else {
                return square
            }
        });
        if (player == "X") {
            setPlayer("O")

        }
        else {
            setPlayer("X")
        }
        setSquares(newBoard)
        console.log(newBoard)
    }

    return (
    <div className="board">
        <div className="board-row">
            <BoardCell player={squares[0]} color={boardState.colors[0]} key="0" onClick={() => handleClick(0)} />
            <BoardCell player={squares[1]} color={boardState.colors[1]} key="1" onClick={() => handleClick(1)} />
            <BoardCell player={squares[2]} color={boardState.colors[2]} key="2" onClick={() => handleClick(2)}/>
        </div>
        <div className="board-row">
            <BoardCell player={squares[3]} color={boardState.colors[3]} key="3" onClick={() => handleClick(3)} />
            <BoardCell player={squares[4]} color={boardState.colors[4]} key="4" onClick={() => handleClick(4)} />
            <BoardCell player={squares[5]} color={boardState.colors[5]} key="5" onClick={() => handleClick(5)}/>
        </div>
        <div className="board-row">
            <BoardCell player={squares[6]} color={boardState.colors[6]} key="6" onClick={() => handleClick(6)}/>
            <BoardCell player={squares[7]} color={boardState.colors[7]} key="7" onClick={() => handleClick(7)}/>
            <BoardCell player={squares[8]} color={boardState.colors[8]} key="8" onClick={() => handleClick(8)}/>
        </div>
    </div>
    );
}

