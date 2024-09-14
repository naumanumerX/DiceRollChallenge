import React from 'react'

import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import RollDice from './RollDice';

import styled from 'styled-components';
function GamePlay({toggle}) {
  return (
    <>
    <div>GamePlay</div>
    <button onClick={toggle}>click</button>
    <MainContainer>
      <div className='Top-section'>
      <TotalScore />
      <NumberSelector/>
      </div>
      <RollDice />
    
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