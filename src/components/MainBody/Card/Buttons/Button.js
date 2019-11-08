import React from 'react'
import styled from 'styled-components'

const MoveButton = styled.button`
  font-size: 2rem;
`;

export default function Button(props){
    return (
        <MoveButton onClick={()=>{console.log('you pushed ' + props.text);props.set(props.day)}}>{props.text}</MoveButton>
    )
}