import React from "react";
import Picture from './Picture'

export default function PictureCard(props){
    return (
        <div className='card'>
            <Picture className='picture' data={props.data}/>
        </div>
    )
}