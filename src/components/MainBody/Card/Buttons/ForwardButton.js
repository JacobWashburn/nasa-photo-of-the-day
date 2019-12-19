import React from 'react'
import Button from './Button'

export default function ForwardButton(props){
    console.log('forward props',props)
    const day = Number(props.day) + 1;
    const dayNumToString = String(day).padStart(2, '0');
    if (props.date === props.today) {
        return (
        <div>
            <Button style={{display:'none'}}/>
        </div>
    )
    }else {
        return (
        <div>
            <Button text='Forward' set={props.set} day={dayNumToString} />
        </div>
    )
    }


}
