import InfiniteScroll from 'react-infinite-scroller';
import PostItem from './PostItem';
import { Result, Page, Root } from '../../types';
import Loading from '../Common/Loading';
import Error from '../Common/Error';
import { InfiniteData } from '@tanstack/react-query';

type Props = {
	data: InfiniteData<any> | undefined;
	fetchNextPage: () => void;
	hasNextPage: boolean | undefined;
	isLoading: boolean;
	isError: boolean;
};

const index = ({
	data,
	fetchNextPage,
	hasNextPage,
	isLoading,
	isError,
}: Props) => {
	console.log(data);

	if (isLoading) {
		return <Loading />;
	}

	if (isError) {
		return <Error />;
	}

	return (
		<InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
			{data?.pages.map((page: Page) => {
				return page.results.map((person: Result) => {
					return <PostItem key={person.name} {...person} />;
				});
			})}
		</InfiniteScroll>
	);
};

export default index;
