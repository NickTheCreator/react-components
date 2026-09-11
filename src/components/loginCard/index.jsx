import "../../styles/loginCard.css";

export default function LoginCard() {
	let header = "Register in";

	return (
		<div className="loginCard--container">
			<div className="loginCard--header">
				<h1 className="header--title">{header}</h1>
			</div>
			<form
				action="x"
				className="loginCard--form"
			>
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
						placeholder="Your username"
						required
						className="form--input"
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
						placeholder="Your email"
						required
						className="form--input"
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
						required
						className="form--input"
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
						required
						className="form--input"
					/>
				</div>
			</form>
			<button
				type="submit"
				className="button-submit"
			>
				Confirm
			</button>
		</div>
	);
}
