import React from "react";
import NavLinks from './NavLink'
import styled from 'styled-components'

const NavLinksWrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-evenly;
`

export default function NavBar() {
    const navLinkProps = [
        {
            name: 'Home',
            url: '#'
        },
        {
            name: 'NASA',
            url: 'https://www.nasa.gov/'
        }
        ];

    return (
        <NavLinksWrapper >
            {navLinkProps.map((data,index) => {
               return <NavLinks key={index} data={data}/>
            })}
        </NavLinksWrapper>
    )

}