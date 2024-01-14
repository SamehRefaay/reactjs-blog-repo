import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useStoreActions, useStoreState } from 'easy-peasy';

const PostPage = () => {
	const { id } = useParams();
	const deletePost = useStoreActions(actions => actions.deletePost);
	const getPostById = useStoreState(state => state.getPostById);
	const post = getPostById(id);
	const navigate = useNavigate();

	const handleDelete = async id => {
		deletePost(id);
		navigate('/');
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
