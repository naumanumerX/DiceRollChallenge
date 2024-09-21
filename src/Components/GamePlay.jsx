import React, { useState } from 'react'

import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import RollDice from './RollDice';

import styled from 'styled-components';
function GamePlay({toggle}) {
  const [currentDice,setCurrentDice]=useState(1);
  const[selectedNumber,setSelectedNumber]=useState();
  const[score,setScore]=useState(0);
  const checkMate=()=>{

    if(selectedNumber===currentDice){
      setScore(prev=>prev+currentDice)

    }
    else{
      setScore(prev=>prev-currentDice)

    }
  }
  return (
    <>
    <div>GamePlay</div>
    <button onClick={toggle}>click</button>
    <MainContainer>
      <div className='Top-section'>
      <TotalScore score={score}/>
      <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
      </div>
      <RollDice  currentDice={currentDice} setCurrentDice={setCurrentDice} checkMate={checkMate}/>
      
    
    </MainContainer>
    
   
    </>
  )
}

export default GamePlay

const MainContainer=styled.div`
padding: 70px;
.Top-section{
  display: flex;
 justify-content: space-between;
 align-items: end;
}
  
`