import React from 'react'
import Game from './game'

const App = () => {
  return (
   <>
   <div className='flex items-center justify-center h-screen flex-col bg-white '>
    <div className='mb-3 text-7xl font-bold text-red-500 '>Tic-Tac-toe</div>
   <Game/>
   </div>
   
   
   </>
  )
}

export default App
