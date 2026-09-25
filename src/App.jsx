import "./App.css";
import HeaderTopBar from "./components/headerTopBar";
import PostCard from "./components/PostCard/index";
import BlogContent from "./components/blogContent";
import LoginCard from "./components/loginCard";

function App() {
	return (
		<div className="components--container">
			<HeaderTopBar />
			<LoginCard />
			<PostCard />
			<BlogContent />
		</div>
	);
}

export default App;
