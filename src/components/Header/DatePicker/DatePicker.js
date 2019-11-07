import React from 'react'

export default function Label(props){
    const dateControl = document.querySelector('input[type="date"]');
    return (
        <input type="date" id="start" name="trip-start"
       value={props.date}
       min="2010-01-01" max="2019-11-06" onChange={()=>{props.setDate(dateControl.value)}} />
    )
}