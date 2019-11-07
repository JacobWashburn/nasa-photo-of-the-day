import React from 'react'
import NavBar from './NavBar/NavBar'
import Date from './Date/Date'
import DatePicker from './DatePicker/DatePicker'

export default function (props) {
    return (
        <div className='header'>
            <Date date={props.date}/>
            <DatePicker date={props.date} setDate={props.setDate} />
            <NavBar/>
        </div>
    )
}