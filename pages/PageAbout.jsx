import  tmdb  from '../image/tmdb-logo.svg'; 

const PageAbout = () => {

	return (
  
        <div className="about">
            <h1 className="about-wowies">Welcome to Wowies</h1>
            <p className="about-body">Why Wowies? Initially, the website was named Wovies because you Watch mOVIES and W is a M but upside down. Then, it becams WOWIES because by adding an additional v after the v would become WOVVIES which  is equivalent as WOWIES. Now WOWIES stands for WOW movies. Wowies is a movie database where users can find information of movies organized by the newest, the most popular  as well as the upcoming and the top rated movies. 

            Click on more info to check out the genre, summary, and the trailer of the movie. Add movies that you like as well as the ones that interest you into your favourite list to access them in the future. 


            This product uses the <a href="https://www.themoviedb.org/?language=en-CA">TMDB</a> API but is not endorsed or certified by  <a href="https://www.themoviedb.org/?language=en-CA">TMDB</a>.</p>

            <a href="https://www.themoviedb.org/?language=en-CA"><img className="tmbd" src={tmdb} alt="tmbd logo" /></a>
        </div>
	);
	
};

export default PageAbout;