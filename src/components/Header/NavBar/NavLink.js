import React from 'react'

export default function NavLink(props) {
    return (
        <a href={props.data.url}>{props.data.name}</a>
            )
            }