import React from 'react';

const notFound = () => {
	return (
		<div className='not-found'>
			<h1>Movie Not Found</h1>
			<h3 style={{ fontFamily: 'sans-serif' }}>
				Please enter a valid movie name
			</h3>
		</div>
	);
};

export default notFound;
