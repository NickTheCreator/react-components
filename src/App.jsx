import "./App.css";
import PostCard from "./components/PostCard/index";
import CommentaryCard from "./components/commentaryCard";

function App() {
	return (
		<div className="components--container">
			<PostCard />
			<CommentaryCard />
		</div>
	);
}

export default App;
