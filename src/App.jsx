import "./App.css";
import PostCard from "./components/PostCard/index";
import CommentaryCard from "./components/commentaryCard";
import LoginCard from "./components/loginCard";

function App() {
	return (
		<div className="components--container">
			<PostCard />
			<CommentaryCard />
			<LoginCard />
		</div>
	);
}

export default App;
