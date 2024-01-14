import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import api from '../api/posts';
import DataContext from '../context/DataContext';

const EditPost = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { posts, setPosts } = useContext(DataContext);

	const post = posts.find(post => post.id.toString() === id);

	const [editTitle, setEditTitle] = useState(post.title);
	const [editBody, setEditBody] = useState(post.body);

	const handleEdit = async (id, updatedTitle, updatedBody) => {
		const datetime = format(new Date(), 'MMMM dd, yyyy pp');
		const updatedPost = {
			id,
			title: updatedTitle,
			datetime,
			body: updatedBody,
		};
		try {
			const response = await api.put(`/posts/${id}`, updatedPost);
			const updatedPosts = posts.map(post =>
				post.id === id ? { ...response.data } : post
			);
			setPosts(updatedPosts);
			navigate('/');
		} catch (error) {
			console.log(`Error: ${error.message}`);
		}
	};

	return (
		<main className="new-post">
			<div className="container">
				<h2>Edit Post</h2>
				<form onSubmit={e => e.preventDefault()}>
					<div className="form-group">
						<label htmlFor="title">Title:</label>
						<input
							id="title"
							type="text"
							required
							value={editTitle}
							onChange={e => setEditTitle(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="post">Post:</label>
						<textarea
							id="post"
							type="text"
							required
							value={editBody}
							onChange={e => setEditBody(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<button
							type="submit"
							onClick={() => handleEdit(post.id, editTitle, editBody)}
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</main>
	);
};

export default EditPost;
