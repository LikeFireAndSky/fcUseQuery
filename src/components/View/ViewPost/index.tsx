import React from 'react';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

interface Props {
	params: string;
}

const ViewPost: React.FC<Props> = ({ params }): JSX.Element => {
	return (
		<div>
			<h1 className=" text-red-700 font-bold">View_Post_Id : {params}</h1>
			<Link to={'/'}>
				<Button>Back To Home</Button>
			</Link>
		</div>
	);
};

export default ViewPost;
