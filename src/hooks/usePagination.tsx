import { useState } from 'react';

const usePagination = () => {
	const [currentPage, setCurrentPage] = useState<number>(1);

	const handleNextPage = () => {
		setCurrentPage((prev) => prev + 1);
		window.scrollTo(0, 0);
	};

	const handlePrevPage = () => {
		setCurrentPage((prev) => prev - 1);
		window.scrollTo(0, 0);
	};

	return { currentPage, handleNextPage, handlePrevPage };
};

export default usePagination;
