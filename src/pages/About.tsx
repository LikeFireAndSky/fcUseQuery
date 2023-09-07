// about //

import Infinity from '../components/Infinity';
import useInfiniteQueryData from '../hooks/useInfiniteQueryData';
import { initialUrl } from '../apis';

const About = () => {
	const { data, fetchNextPage, hasNextPage, isLoading, isError } =
		useInfiniteQueryData({
			params: 'posts',
			initialUrl: initialUrl,
		});

	return (
		<div>
			<Infinity
				data={data}
				fetchNextPage={fetchNextPage}
				hasNextPage={hasNextPage}
				isLoading={isLoading}
				isError={isError}
			/>
		</div>
	);
};

export default About;
