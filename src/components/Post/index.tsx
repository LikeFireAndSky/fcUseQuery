import { State, PostState } from '../../types';
import PostItem from './PostItem';
import PostPagination from './PostPagination';

const Post = ({
	data,
	handleNextPage,
	handlePrevPage,
	currentPage,
}: PostState) => {
	return (
		<>
			<ul>
				{data?.map((post: State) => (
					<PostItem key={post.id} {...post} />
				))}
			</ul>
			<PostPagination
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
				currentPage={currentPage}
			/>
		</>
	);
};

export default Post;
