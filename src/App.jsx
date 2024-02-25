import React, { createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import AppRouter from '../router/AppRouter'
import useWindowDimensions from '../components/ScreenSize'
import "./styles/styles.scss"; 



const AppContext = React.createContext(null);


function App() {

  const windowDimensions = useWindowDimensions();

  return (
    <AppContext.Provider value={windowDimensions}>
        <AppRouter />
    </AppContext.Provider>
  )
}

export default App
