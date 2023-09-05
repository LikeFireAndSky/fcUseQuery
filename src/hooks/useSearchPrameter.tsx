import { useSearchParams } from 'react-router-dom';

const useSearchPrameter = () => {
	const [searchParams] = useSearchParams();
	const id = searchParams.get('id');

	return id as string;
};

export default useSearchPrameter;
