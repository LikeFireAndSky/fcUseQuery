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

export interface Result {
	name: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
	homeworld: string;
	films: string[];
	species: any[];
	vehicles: string[];
	starships: string[];
	created: string;
	edited: string;
	url: string;
}

export interface Page {
	count: number;
	next: string;
	previous?: string;
	results: Result[];
}

export interface Root {
	pages: Page[];
	pageParams: string | undefined[];
}
