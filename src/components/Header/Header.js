import React from 'react'
import NavBar from './NavBar/NavBar'
import Date from './Date/Date'

export default function () {
    return (
        <div className='header'>
            <Date/>
            <NavBar/>
        </div>
    )
}