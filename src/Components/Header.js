import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {

    return (
        <div className='header'>
            <NavLink to='/About'>About</NavLink>
            <NavLink to='/RetractorCompare'>Compare Retractors</NavLink>
            <NavLink to='/TentsCompare'>Compare Tents</NavLink>
        </div>
    )
}

export default Header