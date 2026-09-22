import "./App.css";
import PostCard from "./components/PostCard/index";
import CommentaryCard from "./components/commentaryCard";
import LoginCard from "./components/loginCard";
import HeaderTopBar from "./components/headerTopBar";

function App() {
	return (
		<div className="components--container">
			<HeaderTopBar />
			<PostCard />
			<CommentaryCard />
			<LoginCard />
		</div>
	);
}

export default App;
