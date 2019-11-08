import React from 'react'
import styled from 'styled-components'
import PickerLabel from './PickerLabel'

const DateSelectWrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export default function Label(props) {
    const dateControl = document.querySelector('input[type="date"]');
    return (
        <DateSelectWrapper>
            <PickerLabel/>
            <input type="date" id="start" name="pick_image_date"
                   value={props.date}
                   min="2010-01-01" max={props.today} onChange={() => {
                props.setDate(dateControl.value)
            }} style={{fontSize: '1.5rem'}}/>
        </DateSelectWrapper>
    )
}