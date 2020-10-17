import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import NotFound from './NotFound';

import './App.css';

function App() {
	const [movies, setMovies] = useState([]);
	const [search, setSearch] = useState('');
	const [found, setFound] = useState(true);
	const [query, setQuery] = useState('tom+and+jerry');
	const API_KEY = "--insert api key here--";

	useEffect(() => {
		getMovies();
	}, [query]);

	const getMovies = async () => {
		const response = await fetch(
			`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
		);
		const data = await response.json();
		setMovies(data.Search);
		if (data.Search) {
			setFound(true);
		} else {
			setFound(false);
		}
		console.log(data.Search);
	};
	const onSearchHandler = e => {
		e.preventDefault();
		setSearch(e.target.value);

		// console.log(e.target.value);
	};
	const onSubmitHandler = event => {
		event.preventDefault();
		setQuery(search);
		setSearch('');
		console.log(search);
	};
	return (
		<div className='App'>
			<form
				action='submit'
				className='search-form'
				onSubmit={e => onSubmitHandler(e)}
			>
				<input
					type='text'
					className='search-movie'
					value={search}
					onChange={onSearchHandler}
					placeholder='Search a movie here'
				/>
				<button className='search-button'>Search</button>
			</form>
			<div className='Container'>
				{movies &&
					movies.map((movie, i) => (
						<Movie
							key={i}
							title={movie.Title}
							image={movie.Poster}
							year={movie.Year}
						/>
					))}
				{!found && <NotFound />}
			</div>
		</div>
	);
}

export default App;
