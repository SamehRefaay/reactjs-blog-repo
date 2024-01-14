import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { useStoreActions, useStoreState } from 'easy-peasy';

const EditPost = () => {
	const navigate = useNavigate();
	const { id } = useParams();

	const editTitle = useStoreState(state => state.editTitle);
	const editBody = useStoreState(state => state.editBody);

	const editPost = useStoreActions(actions => actions.editPost);
	const setEditTitle = useStoreActions(actions => actions.setEditTitle);
	const setEditBody = useStoreActions(actions => actions.setEditBody);

	const getPostById = useStoreState(state => state.getPostById);
	const post = getPostById(id);

	useEffect(() => {
		if (post) {
			setEditTitle(post.title);
			setEditBody(post.body);
		}
	}, [post, setEditTitle, setEditBody]);

	const handleEdit = async id => {
		const datetime = format(new Date(), 'MMMM dd, yyyy pp');
		const updatedPost = {
			id,
			title: editTitle,
			datetime,
			body: editBody,
		};
		editPost(updatedPost);
		navigate(`/posts/${id}`);
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
						<button type="submit" onClick={() => handleEdit(post.id)}>
							Submit
						</button>
					</div>
				</form>
			</div>
		</main>
	);
};

export default EditPost;
