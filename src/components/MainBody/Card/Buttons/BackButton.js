import React from 'react'
import Button from './Button'

export default function BackButton(props){
    const day = Number(props.day) -1;
    const dayNumToString = String(day).padStart(2, '0');
    return (
        <div>
            <Button  text='Backward' set={props.set} day={dayNumToString}/>
        </div>
    )
}