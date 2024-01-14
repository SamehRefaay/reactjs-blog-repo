import React, { useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import api from '../api/posts';
import DataContext from '../context/DataContext';

const PostPage = () => {
	const { id } = useParams();
	const { posts, setPosts } = useContext(DataContext);
	const post = posts.find(post => post.id.toString() === id);
	const navigate = useNavigate();

	const handleDelete = async id => {
		try {
			await api.delete(`/posts/${id}`);
			const filteredPosts = posts.filter(post => post.id !== id);
			setPosts(filteredPosts);
			navigate('/');
		} catch (error) {
			console.log(`Error: ${error.message}`);
		}
	};

	return (
		<main className="post-page">
			<div className="container">
				{post ? (
					<>
						<h2 style={{ marginTop: '30px' }}>{post.title}</h2>
						<p className="timeStamp">{post.datetime}</p>
						<p style={{ marginTop: '20px' }}>{post.body}</p>
						<button onClick={() => navigate(`/edit/${post.id}`)}>
							Edit Post
						</button>
						<button onClick={() => handleDelete(post.id)}>Delete Post</button>
					</>
				) : (
					<div style={{ textAlign: 'center', marginTop: '150px' }}>
						Opps! The content was missing or deleted.{' '}
						<Link to="/">
							<span>check our Homepage</span>
						</Link>
					</div>
				)}
			</div>
		</main>
	);
};

export default PostPage;
