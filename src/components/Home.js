import React, { useContext } from 'react';
import Feed from './Feed';
import DataContext from '../context/DataContext';

const Home = () => {
	const { searchResults, fetchError, isLoading } = useContext(DataContext);
	return (
		<main className="Home">
			<div className="container">
				{isLoading && (
					<div className="loading-container">
						<p className="loading">Loading</p>
						<div className="loader"></div>
					</div>
				)}
				{!isLoading && fetchError && (
					<p className="statusMsg" style={{ color: 'red' }}>
						{fetchError}
					</p>
				)}
				{!isLoading &&
					!fetchError &&
					(searchResults.length ? (
						<Feed posts={searchResults} />
					) : (
						<p className="statusMsg">No posts to display.</p>
					))}
			</div>
		</main>
	);
};

export default Home;
