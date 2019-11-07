import React from "react";
import Picture from './Picture'
import ForwardButton from './Buttons/ForwardButton'
import BackButton from './Buttons/BackButton'

export default function PictureCard(props){
    return (
        <div className='card'>
            <ForwardButton/>
            <Picture className='picture' data={props.data}/>
            <BackButton/>
        </div>
    )
}