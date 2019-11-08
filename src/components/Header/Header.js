import React from 'react'
import NavBar from './NavBar/NavBar'
import Date from './DateDisplay/Date'
import DatePicker from './DatePicker/DatePicker'
import styled from 'styled-components'

const HeaderWrapper =  styled.div`
  display:flex;
  justify-content: space-evenly;
  align-items: center;
`;

export default function (props) {
    return (
        <HeaderWrapper className='header'>
            <Date date={props.date}/>
            <DatePicker date={props.date} setDate={props.set} />
            <NavBar/>
        </HeaderWrapper>
    )
}
