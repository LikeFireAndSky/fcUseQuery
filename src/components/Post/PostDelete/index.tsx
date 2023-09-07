import { Button } from '@material-tailwind/react';
import useDelete from '../../../hooks/useDelete';
import { deletePost } from '../../../apis';

const PostDelete = ({ props }: any) => {
	const { deleteMutation, isSuccess, isLoading } = useDelete({
		params: props,
		fn: deletePost,
	});

	return (
		<Button onClick={deleteMutation}>
			{isLoading ? 'Loading' : isSuccess ? 'Success' : 'PostDelete'}
		</Button>
	);
};

export default PostDelete;
