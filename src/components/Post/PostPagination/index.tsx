import { IconButton, Typography } from '@material-tailwind/react';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

import { PostState } from '../../../types';

function PostPagination({
	currentPage,
	handleNextPage,
	handlePrevPage,
}: Omit<PostState, 'data'>) {
	return (
		<div className="flex items-center justify-between w-96 my-5">
			<IconButton
				size="sm"
				variant="outlined"
				disabled={currentPage <= 1}
				onClick={handlePrevPage}
			>
				<ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
			</IconButton>
			<Typography color="white" className="font-extralight">
				Page <strong className="text-gray-900">{currentPage}</strong>
			</Typography>
			<IconButton
				size="sm"
				variant="outlined"
				disabled={currentPage >= 10}
				onClick={handleNextPage}
			>
				<ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
			</IconButton>
		</div>
	);
}

export default PostPagination;
