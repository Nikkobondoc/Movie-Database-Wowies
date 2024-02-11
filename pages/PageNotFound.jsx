const PageNotFound = () => {
   
	return (
		<section className="page-not-found-section">
			<h2>404 ... : </h2>
			<p>Page not found.</p>
			{/* The below anchor tag code is incorrect...
			    Use React Router's Link component for internal 
				links */}
			<p>Go to <a href="/">Home</a> page.</p>
		</section>
	);
	
};

export default PageNotFound;