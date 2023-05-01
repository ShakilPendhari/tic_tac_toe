import React, { useState } from 'react'
import Square from './square'

const Board = () => {
    const [ state, setState ] = useState(Array(9).fill(null));
    const [ isXturn, setIsXturn ] = useState(true);
    const checkWinner = ()=>{
        const arr = [[0,1,2],
                     [3,4,5],
                     [6,7,8],
                     [0,3,6],
                     [1,4,7],
                     [2,5,8],
                     [0,4,8],
                     [2,4,6]];

        for(let logic of arr)
        {
           let [a,b,c] = logic;
        //    console.log(state[a],state[b],state[c])
           if(state[a]!==null&&state[a]===state[b]&&state[a]===state[c])
           {
            return state[a];
           }
           
        }
        return false;
    }
    const handleClick = (index)=>{
        if(state[index]!==null)
        {
            return;
        }
        const copyState = [...state];
        copyState[index] = isXturn? "X":"O";
        setState(()=>copyState);
        console.log("hii",index,state)
        setIsXturn(!isXturn);
    }

    const resetTheGame = ()=>{
        setState(Array(9).fill(null));
        setIsXturn(true);
    }
    
  return <>
    {
        checkWinner()?<div className="winner"><h1>{checkWinner()} Won the game</h1>
        <button className="winnerbut" onClick={resetTheGame}>Play Again</button></div>:<>
        <h3 className='butUp'>{isXturn?"X":"O"} now your turn</h3>
        <div className="board">
        <div className = "square_row">
            <Square handleClick={()=>handleClick(0)} value={state[0]} />
            <Square handleClick={()=>handleClick(1)} value={state[1]} />
            <Square handleClick={()=>handleClick(2)} value={state[2]} />
        </div>
        <div className = "square_row">
            <Square handleClick={()=>handleClick(3)} value={state[3]} />
            <Square handleClick={()=>handleClick(4)} value={state[4]} />
            <Square handleClick={()=>handleClick(5)} value={state[5]} />
        </div>
        <div className = "square_row">
            <Square handleClick={()=>handleClick(6)} value={state[6]} />
            <Square handleClick={()=>handleClick(7)} value={state[7]} />
            <Square handleClick={()=>handleClick(8)} value={state[8]} />
        </div>
    </div>
    <button className="winnerbut" onClick={resetTheGame}>Reset Game</button>
    {
        console.log("Welcome to tic - tac - toe")
    }
        </>
    }
  </>
}

export default Board