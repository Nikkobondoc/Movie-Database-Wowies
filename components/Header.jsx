import React from 'react'
import Nav from './nav'

const Header = () => {
  return (
    <header>
        <a href="/"><h1 className='wowies'>WOWIES</h1></a>
        <Nav />
    </header>
  )
}

export default Header