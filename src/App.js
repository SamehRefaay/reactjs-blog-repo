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
import { DataProvider } from './context/DataContext';

function App() {
	return (
		<div className="App">
			<Header headerTitle="React.js Blog" />
			<DataProvider>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/post" element={<NewPost />} />
					<Route path="/posts/:id" element={<PostPage />} />
					<Route path="/edit/:id" element={<EditPost />} />
					<Route path="/about" element={<AboutUs />} />
					<Route path="*" element={<Missing />} />
				</Routes>
			</DataProvider>
			<Footer />
		</div>
	);
}

export default App;
