import { useNavigate } from 'react-router-dom';

interface PaginationProps {
	collection: string;
	id: string;
}

const useNavigation = ({ collection, id }: PaginationProps) => {
	const navigate = useNavigate();

	const handleNextPage = () => {
		navigate(`/${collection}/?id=${id}`);
		window.scrollTo(0, 0);
	};

	return { handleNextPage };
};

export default useNavigation;
