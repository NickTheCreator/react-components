import { POSTS } from "./data";

import PostCard from "../PostCard";
import NewPostModal from "../newPostModal";

import { useState } from "react";

export default function BlogContent() {
	const [isOpen, setIsOpen] = useState(false);
	const [postBlog, setPostBlog] = useState(() => {
		const salvos = localStorage.getItem("post");
		return salvos ? JSON.parse(salvos) : POSTS;
	});

	const addPost = function ({ author, title, description }) {
		const novoPost = {
			id: postBlog.length + 1,
			author,
			title,
			description,
			createdAt: Date.now(),
		};
		const listaPostAtualizada = [...postBlog, novoPost];

		setPostBlog(listaPostAtualizada);
		localStorage.setItem("post", JSON.stringify(listaPostAtualizada));
	};

	return (
		<div className="blog--container">
			<p>{isOpen ? "clicou" : "nao clicou"}</p>
			<button
				onClick={() => {
					setIsOpen(true);
				}}
			>
				Adicionar post
			</button>

			<NewPostModal
				isOpen={isOpen}
				onSave={addPost}
				onClose={() => setIsOpen(false)}
			/>
			<div className="blog--content">
				{postBlog.map((post) => (
					<PostCard
						key={post.id}
						author={post.author}
						title={post.title}
						description={post.description}
					/>
				))}
			</div>
		</div>
	);
}

// .map vai ser aqui para renderizar dinamicamente as post criados
// Criar um arquivo data.js (vazio) aonde vao ser armazenado os post criados (localStorage)
