import "../../styles/commentaryCard.css";
import PostCard from "../PostCard";

export default function CommentaryCard() {
	const author = "James";
	const title = "TITULO";
	const description =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat finibus enim, at gravida augue scelerisque eu. Pellentesque luctus leo nec iaculis mattis. Integer vel ornare risus. Etiam et metus lacus. Suspendisse hendrerit at tortor sed ornare. Integer a quam condimentum, varius tortor id, congue massa. Cras suscipit dolor eu finibus dapibus. Pellentesque tempor, diam quis gravida suscipit, ante mi molestie mauris, eu blandit risus orci ut dolor. Mauris tempus sapien elementum lacus convallis, nec pellentesque augue dapibus. Vestibulum elementum libero eget mollis consectetur. Sed nisi felis, faucibus et elit at, tempor tempus lacus. Nunc ut sapien a enim semper consequat nec vel magna. Morbi leo risus, ultrices consequat felis in, suscipit sodales sapien. Mauris laoreet velit lacus, iaculis feugiat est semper id. Mauris id diam velit. Mauris eget mauris sem.";
	return (
		<PostCard
			author={author}
			title={title}
			description={description}
		/>
	);
}
