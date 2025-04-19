import React, { useState } from 'react'


const Game = () => {
  const wincondition=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    const [board, setBoard] = useState(["","","","","","","","",""]);
   
    const [value, setValue] = useState("0");
    const [click, setClick] = useState(1);
    const [winner, setWinner] = useState(null);
    const [xscore, setXscore] = useState(null);
    const [oscore, setOscore] = useState(null);
    const changeValue = (index) => {
      if(board[index] !== "") {
        
        return; // Prevent further execution if already clicked
      } 
      // Create a new copy of the board
      const newBoard = [...board];
  
      // Update the specific index
      newBoard[index] = click % 2 === 0 ? "o" : "x";
  
      // Update the state
      setBoard(newBoard);
  
      // Increment the click count
      setClick(click + 1);
      for(let i=0;i<wincondition.length;i++){
        const [a, b, c] = wincondition[i];
        if (
            newBoard[a] !== "" &&
            newBoard[a] === newBoard[b] &&
            newBoard[b] === newBoard[c]
        ) {
            setWinner(`${newBoard[a]} is the winner!`);
             // Stop further execution
            newBoard[a] === "x" ? setXscore(xscore+1) : setOscore(oscore+1);
            console.log("X score: ", xscore);
            console.log("O score: ", oscore);
            break
        }
        if(click === 9) {
          setWinner("It's a draw!");
        }
        
        
        
      }
    
  };
const resetGame = (xscore,oscore) => {
  setBoard(["","","","","","","","",""]);
  setClick(1);
  setWinner(null);
  setValue("0");
  setXscore(xscore);
  setOscore(oscore);
};
return (
        <div className=' flex flex-col items-center '>
          <div className='flex '>
            <div className='w-[150px] text-center border-white border-4 text-3xl' style={{borderBottomColor:(click+1)%2?"white":"blue"}}>x - {xscore}</div>
            <div className='w-[150px] text-center rounded-[3px] border-white  text-3xl border-4' style={{borderBottomColor:(click)%2?"white":"red"}}>o - {oscore}</div>
          </div>
    <div className=' border-white bg-black  h-[300px] w-[300px] flex flex-wrap gap-[6px] items-center justify-center '>
     
       <div className='flex flex-wrap gap-[6px] items-center justify-center'>
       {
        board.map((item,index) => {
          return(<div className=' bg-white w-[95px] h-[95px]'><button className='w-full h-full text-6xl' style={{color: item==="x"?"blue":"red"}} onClick={()=>{changeValue(index)}} key={index}>{item} </button></div>)
        })
      } 
       </div>
       
       <div className='fixed h-screen w-screen bg-black opacity-40 mt-[-52px]' style={{display:winner?"block":"none"}}></div>

       <div className=' absolute  bg-amber-50  rounded-2xl w-[400px] h-[100px]  flex flex-col text-center' style={{display:winner?"block":"none"}}>
       
        <div className='text-3xl mb-2'>{winner}</div> 
        <button className='text-black bg-yellow-400 hover:bg-yellow-500   font-medium rounded-full text-2xl px-5 py-2 text-center me-2 mb-20' onClick={()=>{resetGame(xscore,oscore)}}> Play again</button>
        
       </div>
       
       

     

    </div>
    <button className=' mt-6 py-2 hover:bg-amber-300 font-bold rounded-[10px] bg-amber-200 text-3xl text-red-500 w-[200px]' onClick={()=>{resetGame(null,null)}}>Reset Game</button>
    </div>
    
  )


}
export default Game;
