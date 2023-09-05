// IMPORTS //
import useSearchPrameter from '../hooks/useSearchPrameter';

// APIS //
import { getComments } from '../apis';
import useQueryData from '../hooks/useQueryData';

// IMPORT COMPONENTS //
import View from '../components/View';
import Loading from '../components/Common/Loading';
import Error from '../components/Common/Error';

const Post = () => {
	const params = useSearchPrameter();

	const { data, isLoading, error } = useQueryData({
		params,
		key: 'comments',
		cache: 10,
		stale: 5,
		fn: getComments,
	});

	if (isLoading) return <Loading />;

	if (error) return <Error />;

	return (
		<div className="w-full h-full flex flex-col items-center bg-blue-gray-300 gap-3">
			<View data={data} params={params} />
		</div>
	);
};

export default Post;
