import { useInfiniteQuery } from '@tanstack/react-query';
import { getInfiniteScroll } from '../apis';

type Props = {
	params: string;
	initialUrl: string;
};

const useInfiniteQueryData = ({ params, initialUrl }: Props) => {
	const queryKey = [params];

	const { data, fetchNextPage, hasNextPage, isLoading, isError } =
		useInfiniteQuery(
			queryKey,
			({ pageParam = initialUrl }) => getInfiniteScroll(pageParam),
			{
				getNextPageParam: (lastPage) => lastPage.next || undefined,
			},
		);

	return { data, fetchNextPage, hasNextPage, isLoading, isError };
};

export type ReturnInfinity = ReturnType<typeof useInfiniteQueryData>;

export default useInfiniteQueryData;
