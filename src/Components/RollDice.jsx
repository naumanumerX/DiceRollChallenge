import React, { useState } from 'react'
import styled from 'styled-components'

function RollDice({currentDice,setCurrentDice,checkMate}) {
  

  const generateRandomNumber=(min,max)=>{
  console.log (Math.floor(Math.random()*(max-min)+min))
  setCurrentDice( Math.floor(Math.random()*(max-min)+min));

  checkMate();
  }
  return (

<DiceContainer>

  <div className="dice">
    <img onClick={()=>generateRandomNumber(1,7)}  
     src={`/Images/dice_${currentDice}.png`} alt="dice1" />

  </div>
  <p>Click To Roll</p>
</DiceContainer>
    
  )
}

export default RollDice

const DiceContainer=styled.div`
margin-top: 40px;
display: flex;
align-items: center;
flex-direction: column;
.dice{
  cursor: pointer;
}
p{
  font-weight: 500;
  font-size: 30px;
}
`;
