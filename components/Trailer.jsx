import { useState, useEffect } from 'react';

function Trailer({movie}) {

    const [trailer, setTrailer] = useState('');
    
    useEffect(() => {
        function checkTrailer() {
            for (let i = 0; i < movie.videos.results.length; i++) {
                const movieVideosResults = movie.videos.results[i];
                if ((movieVideosResults.type === "Trailer") && (movieVideosResults.site === "YouTube")){
                    console.log(movieVideosResults); 
                    return movieVideosResults.key;
                }
            }
        }
        if (movie) {
            setTrailer(checkTrailer())
        }
    }, [movie])

    console.log(trailer);
    console.log("trailer page movie videos:"+ movie.videos.results.length)

  return (
    <div className="video-container-wrapper">
        <div className="video-iframe-container">
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailer}`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe> 
        </div>
    </div> 

  )
}

export default Trailer