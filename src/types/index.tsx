export type State = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

export type PostState = {
	data: State[];
	handleNextPage: () => void;
	handlePrevPage: () => void;
	currentPage: number;
};

export type PostItemProps = {
	id: number;
	title: string;
	body: string;
};

export type CommentState = {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
};
