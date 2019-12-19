import React from 'react'
import styled from 'styled-components'

const NavLink = styled.a`
  text-decoration: none;
  color: black;
`

export default function NavLinkCreator(props) {
    return (
        <NavLink href={props.data.url}>{props.data.name}</NavLink>
            )
            }