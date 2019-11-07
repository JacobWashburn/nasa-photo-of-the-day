import React from "react";
import NavLink from './NavLink'

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
        <div className='navBar'>
            {navLinkProps.map((data,index) => {
               return <NavLink key={index} data={data}/>
            })}
        </div>
    )

}