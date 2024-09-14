import React, { useState } from 'react'
import styled from 'styled-components'

function NumberSelector() {
    const arrNumber=[1,2,3,4,5,6]
    const[selectedNumber,setSelectedNumber]=useState();
    console.log(selectedNumber)
  return (
    <div>
        {
            <NumberSelectorContainer>
              <div className="flex">
                {
              arrNumber.map((value,index)=>(
                <Box 
                isSelected={value===selectedNumber}
                key={index} onClick={()=>setSelectedNumber(value)}>
                {value}
            </Box>
            ))}
            
            </div>
            <p>Select Number</p>
              </NumberSelectorContainer>
        }
    
    
    </div>
  )
}

export default NumberSelector

const NumberSelectorContainer=styled.div`

margin-right: 20px;
.flex{
  
  display: flex;
 gap: 24px;
}
p{
  font-size: 24px;
  float: right;
}
`;

const Box=styled.div`
height: 72px;
width: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight:700;
background-color: ${(props)=>(props.isSelected ? "black": "white")};
color:  ${(props)=>(!props.isSelected ? "black": "white")};
    
`;