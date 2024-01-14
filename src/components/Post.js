import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
	return (
		<article className="post">
			<Link to={`/posts/${post.id}`}>
				<h2>{post.title}</h2>
				<p className="timeStamp">{post.datetime}</p>
				<p>
					{post.body.length <= 250
						? post.body
						: `${post.body.slice(0, 250)}...`}
				</p>
			</Link>
		</article>
	);
};

export default Post;
