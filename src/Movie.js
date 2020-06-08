import React from 'react';

const movie = ({ title, image, year }) => {
	return (
		<div className='movie-card'>
			<h1 className='movie-title'>{title}</h1>
			<img src={image} alt='' className='movie-poster' />
			<h3 className='movie-year'>{year}</h3>
		</div>
	);
};

export default movie;
