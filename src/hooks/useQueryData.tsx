import { useQuery } from '@tanstack/react-query';

interface Props {
	params: string | number;
	key: string;
	cache: number;
	stale: number;
	fn: (props: string) => Promise<any>;
}

function useQueryData({ params, key, cache, stale, fn }: Props) {
	const queryKey: [string, string | number] = [key, `${params}`];
	const Option = {
		cacheTime: 1000 * 60 * cache,
		staleTime: 1000 * 60 * stale,
		keepPreviousData: true,
	};

	const { data, isLoading, error } = useQuery(
		queryKey,
		() => fn(params as string),
		Option,
	);

	return { data, isLoading, error };
}

export default useQueryData;
