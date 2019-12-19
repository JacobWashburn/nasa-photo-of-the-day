import React from 'react'
import styled from 'styled-components'

const MoveButton = styled.button`
  font-size: 2rem;
`;

export default function Button(props) {
    console.log({props})
    let some = () => {
        console.log('you pushed ' + props.text);
        props.set(props.day)
    }
    return (
        <MoveButton onClick={some}>{props.text}</MoveButton>
    )
}