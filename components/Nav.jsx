import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='main-nav'>
        <ul>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/favourite">Favourites</NavLink></li>
          <div className='search'>
            <input type="text" name="search" class="round" placeholder='Search For Movie' />
          </div>
        </ul>
    </nav>
  )
}

export default Nav