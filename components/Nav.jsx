import React from 'react'
import { NavLink } from 'react-router-dom'
import { tabletWidth} from "../global/variables"; 
import useWindowDimensions from '../components/ScreenSize'

const Nav = () => {

  const dimensions = useWindowDimensions();
  const isTablet = dimensions.width > tabletWidth;

  return (
    <nav className='main-nav'>
      {isTablet ? (
        <ul>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/favourite">Favourites</NavLink></li>
        </ul>
      ):(
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/favourite">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/> 
          </svg>
              </NavLink></li>
            
            <li><NavLink to="/about">About</NavLink></li>
        </ul>
      )}
        
    </nav>
  )
}

export default Nav