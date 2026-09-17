import "../../styles/postCard.css";

export default function PostCard({
	author = "Nobody",
	title = "lorem ipsum",
	description = "mockup text",
}) {
	return (
		<div className="postCard--container">
			<div className="postCard--header">
				<div className="autor--post">
					<p>&#9675;</p>
					<h2>{author}</h2>
				</div>
				<p>Time stamp</p>
			</div>
			<div className="postCard--body">
				<h1 className="post--title">{title}</h1>
				<p className="post--content">{description}</p>
			</div>
			<div className="postCard--footer">
				<p>&uArr;</p>
				<p>&dArr;</p>
				<p>Comentarios</p>
			</div>
		</div>
	);
}
