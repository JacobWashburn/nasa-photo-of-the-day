import React from "react";
import NavLink from './NavLink'

export default function NavBar() {
    const navLinkProps = [
        {
            name: 'NASA',
            url: 'https://www.nasa.gov/'
        }]

    return (
        <div className='nav'>
            {navLinkProps.map(data => {
               return <NavLink  data={data}/>
            })}
        </div>
    )

}