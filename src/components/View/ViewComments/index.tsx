import { Card, CardBody, Typography } from '@material-tailwind/react';
import { CommentState } from '../../../types';

const ViewComments = ({ email, body }: Omit<CommentState, 'postId'>) => {
	return (
		<div className="w-5/6">
			<Card>
				<CardBody>
					<Typography className=" font-bold">{email}</Typography>
					<Typography className=" text-sm">{body}</Typography>
				</CardBody>
			</Card>
		</div>
	);
};

export default ViewComments;
