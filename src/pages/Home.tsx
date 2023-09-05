// IMPORT COMPONENTS //
import Post from '../components/Post';
import Error from '../components/Common/Error';
import Loading from '../components/Common/Loading';

// IMPORT HOOKS //
import usePagination from '../hooks/usePagination';

import useQueryData from '../hooks/useQueryData';

// IMPORT APIS //
import { getPosts } from '../apis';

const Home = () => {
	const { currentPage, handleNextPage, handlePrevPage } = usePagination();

	const { data, isLoading, error } = useQueryData({
		params: String(currentPage),
		key: 'posts',
		cache: 10,
		stale: 5,
		fn: getPosts,
	});

	if (error) {
		return <Error />;
	}

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div className="w-screen flex flex-col items-center bg-gray-600">
			<Post
				data={data}
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
				currentPage={currentPage}
			/>
		</div>
	);
};

export default Home;
