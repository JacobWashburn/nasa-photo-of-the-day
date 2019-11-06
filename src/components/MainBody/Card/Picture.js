import React from "react";

export default function Picture(props) {

    return(
        <div>
            <img src={props.data.url} alt='Image from NASA'/>
            <p>Title: {props.data.title}</p>
            <p>Description: {props.data.explanation}</p>
        </div>
    )
}