import { useState } from "react";
import "../../styles/loginCard.css";

export default function LoginCard() {
	const USUARIOS = [{}];

	let header = "Register in";

	const [usuario, setUsuario] = useState(USUARIOS);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassowrd] = useState(password);

	const checkPassword = function () {
		if (confirmPassword == password) setConfirmPassowrd("");
	};

	const handleSubmit = function () {
		checkPassword();
		const novoUsuario = {
			username,
			email,
			password,
		};
		setUsuario([...usuario, novoUsuario]);
		setUsername("");
		setEmail("");
		setPassword("");
		console.log("fucionou");
	};

	return (
		<div className="loginCard--container">
			<div className="loginCard--header">
				<h1 className="header--title">{header}</h1>
			</div>
			<form
				onSubmit={handleSubmit}
				className="loginCard--form"
			>
				<div className="form--container">
					<div className="form--field">
						<label
							htmlFor="username"
							className="form--label"
						>
							Insert your username
						</label>
						<input
							type="text"
							id="username"
							name="username"
							className="form--input"
							placeholder="Your username"
							value={username}
							onChange={(e) => {
								setUsername(e.target.value);
							}}
							required
						/>
					</div>
					<div className="form--field">
						<label
							htmlFor="email"
							className="form--label"
						>
							Insert your email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className="form--input"
							placeholder="Your email"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							required
						/>
					</div>
					<div className="form--field">
						<label
							htmlFor="password"
							className="form--label"
						>
							Insert your password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							className="form--input"
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							required
						/>
					</div>
					<div className="form--field">
						<label
							htmlFor="repeat-password"
							className="form--label"
						>
							Repeat your password
						</label>
						<input
							type="password"
							id="repeat-password"
							name="repeat-password"
							className="form--input"
							value={confirmPassword}
							onChange={(e) => {
								setConfirmPassowrd(e.target.value);
							}}
							required
						/>
					</div>
				</div>
				<input
					type="submit"
					value="submit"
					className="ipt--form"
				/>
			</form>
		</div>
	);
}
