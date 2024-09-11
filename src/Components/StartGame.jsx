import React from 'react'
import styled from 'styled-components'

const StartGame = ({toggle}) => {
  return (
    <>
  
      <Container>
        <div>
        <img src="/Images/dice.PNG" alt="" />
        </div>
      
        <div className='content'>  
              <h1>Dice Game
                </h1>
                </div>
                <Button onClick={toggle}> Play Now</Button>

      </Container>

    </>
  )
}

export default StartGame

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 0vh;
  .content{
    h1{
        font-size: 96px;
        white-space: nowrap;
    }
  }
`
const Button=styled.button`
    
    padding:18px 18px;
  
   min-width: 220px;
    border: none;
    background-color: black;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s background ease-in;
    &:hover{
      background-color: white;
      border-color: 1px solid black;
      color: black;
      transition: 0.3s background ease-in;
    }

`