import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

type Props = {
	page: number;
	maxPostPage: number;
	params: string | number;
	fn: (props: string) => Promise<any>;
};

const usePrefetch = ({ page, maxPostPage, params, fn }: Props): void => {
	const queryClient = useQueryClient();

	useEffect(() => {
		if (page < maxPostPage) {
			const nextPage = page + 1;
			queryClient.prefetchQuery([params, nextPage.toString()], () =>
				fn(nextPage.toString()),
			);
		}
	}, [page, queryClient, fn, maxPostPage, params]);
};

export default usePrefetch;
