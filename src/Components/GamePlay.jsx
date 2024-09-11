import React from 'react'

import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';


function GamePlay({toggle}) {
  return (
    <>
    <div>GamePlay</div>
    <button onClick={toggle}>click</button>
    <TotalScore />
    <NumberSelector/>
    </>
  )
}

export default GamePlay