import axios from 'axios';

const getPosts = async (props: string) => {
	const response = await axios.get(
		`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${props}`,
	);
	return response.data;
};

const getComments = async (props: string) => {
	const response = await axios.get(
		`https://jsonplaceholder.typicode.com/comments?postId=${props}`,
	);
	return response.data;
};

const deletePost = async (props: string) => {
	const response = await axios.delete(
		`https://jsonplaceholder.typicode.com/posts/${props}`,
	);
	return response.data;
};

const updateTitle = async (props: string) => {
	const response = await axios.put(
		`https://jsonplaceholder.typicode.com/posts/${props}`,
		{ title: 'Updated Title' },
	);
	return response.data;
};
const initialUrl = 'https://swapi.dev/api/people/';

const getInfiniteScroll = async (url: string) => {
	const response = await axios.get(url);
	return response.data;
};

export {
	getPosts,
	getComments,
	deletePost,
	updateTitle,
	getInfiniteScroll,
	initialUrl,
};
