import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components 
import Header from '../components/header';
import Footer from '../components/footer';

//page
// import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavourite from '../pages/Pagefavourite';
import Home from '../pages/PageHome.jsx';
import PageMovie from '../pages/PageMovie.jsx';


import React from 'react';
import { APP_FOLDER_NAME } from "../src/globals.js";


const AppRouter = () => {
  return (
    <BrowserRouter basename={`/${APP_FOLDER_NAME}`} >
        <div className='wrapper'>
            <Header />
                <main>
                    <Routes>
                        <Route path='/about' element={<PageAbout />} />
                        <Route path='/favourite' element={<PageFavourite />} />
                        <Route path='/' element={<Home />} />
                        <Route path="/movie/:id" element={<PageMovie />} />
                        {/* <Route path='/*' element={<PageNotFound />} /> */}
                    </Routes>
                </main>
            <Footer />
        </div>
    </BrowserRouter>
  )
}

export default AppRouter


