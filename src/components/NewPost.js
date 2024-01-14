import React from 'react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { useStoreActions, useStoreState } from 'easy-peasy';

const NewPost = () => {
	const posts = useStoreState(state => state.posts);
	const postTitle = useStoreState(state => state.postTitle);
	const postBody = useStoreState(state => state.postBody);

	const setPostTitle = useStoreActions(actions => actions.setPostTitle);
	const setPostBody = useStoreActions(actions => actions.setPostBody);
	const savePost = useStoreActions(actions => actions.savePost);

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
		savePost(newPost);
		navigate('/');
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
