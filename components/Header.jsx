import React from 'react'
import Nav from './Nav'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <header>
        <NavLink to="/" className={'wowies'}>WOWIES</NavLink>
        <Nav />
    </header>
  )
}

export default Header