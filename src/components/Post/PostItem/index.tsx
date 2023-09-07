import {
	Card,
	CardBody,
	CardFooter,
	Typography,
	Button,
} from '@material-tailwind/react';
import { PostItemProps } from '../../../types';
import PostDelete from '../PostDelete';

import useNavigation from '../../../utills';

const PostItem: React.FC<PostItemProps> = ({
	id,
	title,
	body,
}): JSX.Element => {
	const { handleNextPage } = useNavigation({
		collection: 'post',
		id: id.toString(),
	});

	return (
		<div>
			<Card className="w-96 mt-6">
				<CardBody>
					<Typography color="gray" variant="h5" className="mb-2">
						{title}
					</Typography>
					<Typography>{body}</Typography>
				</CardBody>
				<CardFooter>
					<Button onClick={handleNextPage} size="lg">
						Read More
					</Button>
					<PostDelete props={id} />
				</CardFooter>
			</Card>
		</div>
	);
};

export default PostItem;
