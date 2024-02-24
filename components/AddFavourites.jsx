import React from 'react';

function AddFavourites({ isInFavorites }) {
  return (
    <div>
      
      {isInFavorites ? (
        // if it's in fav then show filled heart with remove from favourite text
        <div className='fav-btn-wrapper'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/> 
          </svg> <p>Remove from Favourite</p>
        </div>
      ) : (
        // if it's not in fav then show heart with add to favourite text
        <div className='fav-btn-wrapper'> 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/> 
          </svg> <p>Add to Favourite</p>
        </div> 
       
      )}
    </div>
  );
}

export default AddFavourites;
