import { Card, CardBody, Typography } from '@material-tailwind/react';

import { Result } from '../../../types';

const PostItem = ({
	name,
	hair_color,
	eye_color,
	height,
	mass,
	skin_color,
}: Result) => {
	return (
		<>
			<Card className="bg-gray-700 mt-5">
				<CardBody className=" text-gray-500 text-sm">
					<div>
						<Typography color="white" variant="h5" className="mb-2">
							{name}의 인적사항
						</Typography>
						<p>키 : {height}</p>
						<p>몸무게 : {mass}</p>
					</div>
					<p>머리 색깔 : {hair_color}</p>
					<p>눈 색깔 : {eye_color}</p>
					<p>피부 색깔 : {skin_color}</p>
				</CardBody>
			</Card>
		</>
	);
};

export default PostItem;
