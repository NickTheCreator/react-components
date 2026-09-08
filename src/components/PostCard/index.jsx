import "../../styles/postCard.css";

export default function PostCard() {
	const title = "TITULO";
	const description = "DESCRICAO";
	return (
		<div className="postCard--container">
			<div className="postCard--header">
				<div className="autor--post">
					<p>&#9675;</p>
					<h2>Autor</h2>
				</div>
				<p>Time stamp</p>
			</div>
			<div className="postCard--body">
				<h1>{title}</h1>
				<p>{description}</p>
			</div>
			<div className="postCard--footer">
				<p>&uArr;</p>
				<p>&dArr;</p>
				<p>Comentarios</p>
			</div>
		</div>
	);
}
