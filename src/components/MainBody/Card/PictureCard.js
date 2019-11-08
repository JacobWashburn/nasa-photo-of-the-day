import React from "react";
import styled from 'styled-components'
import Picture from './PictureCardItems/Picture'
import ForwardButton from './Buttons/ForwardButton'
import BackButton from './Buttons/BackButton'

const CardWrapper = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 3% auto;
  
`

export default function PictureCard(props) {
    return (
        <CardWrapper>
            <BackButton set={props.set} day={props.day}/>
            <Picture data={props.data}/>
            <ForwardButton set={props.set} day={props.day} date={props.date} today={props.today}/>
        </CardWrapper>
    )
}