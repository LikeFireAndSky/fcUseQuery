import ViewComments from './ViewComments';
import ViewPost from './ViewPost';
import { CommentState } from '../../types';

function Comment({ data, params }: any) {
	return (
		<>
			{data?.map((comment: CommentState) => (
				<ViewComments key={comment.id} {...comment} />
			))}
			<ViewPost params={params} />
		</>
	);
}

export default Comment;
