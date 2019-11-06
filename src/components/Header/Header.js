import React from 'react'
import NavBar from './NavBar/NavBar'
import Date from './Date/Date'

export default function (props) {
    return (
        <div className='header'>
            <Date date={props.date}/>
            <NavBar/>
        </div>
    )
}