import React from 'react';
import Feed from './Feed';
import { useStoreState } from 'easy-peasy';

const Home = ({ fetchError, isLoading }) => {
	const searchResults = useStoreState(state => state.searchResults);
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
