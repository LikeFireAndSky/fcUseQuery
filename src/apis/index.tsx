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

export { getPosts, getComments };
