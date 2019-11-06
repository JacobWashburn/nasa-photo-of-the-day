import React from "react";
import Picture from './Picture'
import ForwardButton from './ForwardButton'
import BackButton from './BackButton'

export default function PictureCard(props){
    return (
        <div className='card'>
            <ForwardButton/>
            <Picture className='picture' data={props.data}/>
            <BackButton/>
        </div>
    )
}