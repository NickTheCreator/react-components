import TextField from "@mui/material/TextField";
import "./headerTopBar.css";

export default function HeaderTopBar() {
	return (
		<header className="header--container">
			<div className="header--logo">
				<p>&Ocirc;</p>
			</div>
			<div className="header--searchBar">
				<TextField
					id="searchBar"
					label="Search"
				/>
			</div>

			<nav className="navigation--container">
				<ul className="navigation--list">
					<li className="list--item">
						<a
							href="#"
							className="item--link"
						>
							Teste 1
						</a>
					</li>
					<li className="list--item">
						<a
							href="#"
							className="item--link"
						>
							Teste 2
						</a>
					</li>
					<li className="list--item">
						<a
							href="#"
							className="item--link"
						>
							Teste 3
						</a>
					</li>
					<li className="list--item">
						<a
							href="#"
							className="item--link"
						>
							Teste 4
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
