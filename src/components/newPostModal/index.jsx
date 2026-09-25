import { useState } from "react";
import "./newPostModal.css";

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
			<form
				onSubmit={handleSubmit}
				className="newPost--form"
			>
				<div className="field--container">
					<div className="field--input">
						<label htmlFor="autor-ipt">Autor do post</label>
						<input
							type="text"
							name="autor"
							id="autoer-ipt"
							value={author}
							onChange={(e) => setAuthor(e.target.value)}
						/>
					</div>
					<div className="field--input">
						<label htmlFor="title-ipt">Titulo do post</label>
						<input
							type="text"
							name="title"
							id="title-ipt"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<div className="field--input text-area">
						<label htmlFor="description-txt">Escreva o post</label>
						<textarea
							name="description"
							id="description-txt"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>
				</div>
				<div className="buttons--container">
					<button
						type="submit"
						value="submit"
						className="btn--form btn--primary"
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
						className="btn--form btn--secondary"
					>
						Cancelar
					</button>
				</div>
			</form>
		</div>
	);
}
