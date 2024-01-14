import React, { useContext, useState } from 'react';
import DataContext from '../context/DataContext';
import { format } from 'date-fns';
import api from '../api/posts';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
	const [postTitle, setPostTitle] = useState('');
	const [postBody, setPostBody] = useState('');
	const { posts, setPosts } = useContext(DataContext);
	const navigate = useNavigate();

	const handleSubmit = async e => {
		e.preventDefault();
		const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
		const datetime = format(new Date(), 'MMMM dd, yyyy pp');
		const newPost = {
			id,
			title: postTitle,
			datetime,
			body: postBody,
		};
		try {
			const response = await api.post('/posts', newPost);
			const allPosts = [...posts, response.data];
			setPosts(allPosts);
			setPostTitle('');
			setPostBody('');
			navigate('/');
		} catch (error) {
			console.log(`Error: ${error.message}`);
		}
	};

	return (
		<main className="new-post">
			<div className="container">
				<h2>New Post</h2>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="title">Title:</label>
						<input
							id="title"
							type="text"
							required
							value={postTitle}
							onChange={e => setPostTitle(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="post">Post:</label>
						<textarea
							id="post"
							type="text"
							required
							value={postBody}
							onChange={e => setPostBody(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<button type="submit">Submit</button>
					</div>
				</form>
			</div>
		</main>
	);
};

export default NewPost;
