import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStoreActions, useStoreState } from 'easy-peasy';

const Nav = () => {
	const posts = useStoreState(state => state.posts);
	const search = useStoreState(state => state.search);
	const setSearch = useStoreActions(actions => actions.setSearch);
	const setSearchResults = useStoreActions(actions => actions.setSearchResults);

	useEffect(() => {
		const filteredPost = posts.filter(
			post =>
				post.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
				post.body.toLocaleLowerCase().includes(search.toLocaleLowerCase())
		);
		setSearchResults(filteredPost.reverse());
	}, [posts, search, setSearchResults]);
	return (
		<nav>
			<div className="container">
				<form action="" onSubmit={e => e.preventDefault()}>
					<label htmlFor="search">Search Posts:</label>
					<input
						id="search"
						type="text"
						placeholder="Search Posts"
						value={search}
						onChange={e => setSearch(e.target.value)}
					/>
				</form>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/post">Post</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
