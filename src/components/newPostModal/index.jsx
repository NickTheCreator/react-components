import { useState } from "react";

export default function NewPostModal({ isOpen, onClose, onSave }) {
	const [author, setAuthor] = useState("");
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	if (!isOpen) return null;

	const handleSubmit = function (e) {
		e.preventDefault();
		console.log("funcionou");

		onSave({ author, title, description });

		setAuthor("");
		setTitle("");
		setDescription("");
		onClose();
	};

	return (
		<div className={`modal--container ${isOpen ? "modal--overlay-open" : ""}`}>
			<div className="newPost--content">
				<form
					onSubmit={handleSubmit}
					className="newPost--form"
				>
					<label htmlFor="autor-ipt">Autor do post</label>
					<input
						type="text"
						name="autor"
						id="autoer-ipt"
						value={author}
						onChange={(e) => setAuthor(e.target.value)}
					/>
					<label htmlFor="title-ipt">Titulo do post</label>
					<input
						type="text"
						name="title"
						id="title-ipt"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<label htmlFor="description-txt">Escreva o post</label>
					<textarea
						name="description"
						id="description-txt"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
					<button
						type="submit"
						value="submit"
					>
						Salvar
					</button>
					<button
						type="button"
						onClick={() => {
							onClose();
							setAuthor("");
							setTitle("");
							setDescription("");
						}}
					>
						Cancelar
					</button>
				</form>
			</div>
		</div>
	);
}
