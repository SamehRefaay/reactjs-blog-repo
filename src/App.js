import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import PostPage from './components/PostPage';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import NewPost from './components/NewPost';
import Missing from './components/Missing';
import EditPost from './components/EditPost';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import useAxiosFetch from './hooks/useAxiosFetch';
import { useStoreActions } from 'easy-peasy';

function App() {
	const setPosts = useStoreActions(actions => actions.setPosts);
	const { data, fetchError, isLoading } = useAxiosFetch(
		'http://localhost:3500/posts'
	);

	useEffect(() => {
		setPosts(data);
	}, [data, setPosts]);

	return (
		<div className="App">
			<Header headerTitle="React.js Blog" />
			<Nav />
			<Routes>
				<Route
					path="/"
					element={<Home fetchError={fetchError} isLoading={isLoading} />}
				/>
				<Route path="/post" element={<NewPost />} />
				<Route path="/posts/:id" element={<PostPage />} />
				<Route path="/edit/:id" element={<EditPost />} />
				<Route path="/about" element={<AboutUs />} />
				<Route path="*" element={<Missing />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
