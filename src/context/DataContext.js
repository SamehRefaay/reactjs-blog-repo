import { createContext, useEffect, useState } from 'react';
import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	const [posts, setPosts] = useState([]);
	const [search, setSearch] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	const { data, fetchError, isLoading } = useAxiosFetch(
		'http://localhost:3500/posts'
	);

	useEffect(() => {
		setPosts(data);
	}, [data]);

	useEffect(() => {
		const filteredPost = posts.filter(
			post =>
				post.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
				post.body.toLocaleLowerCase().includes(search.toLocaleLowerCase())
		);
		setSearchResults(filteredPost.reverse());
	}, [posts, search]);

	return (
		<DataContext.Provider
			value={{
				posts,
				setPosts,
				search,
				setSearch,
				searchResults,
				fetchError,
				isLoading,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
