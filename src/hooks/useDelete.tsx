import { useMutation } from '@tanstack/react-query';

type Props = {
	params: string;
	fn: (props: string) => Promise<any>;
};

const useDelete = ({ params, fn }: Props) => {
	const mutation = useMutation((params: string) => fn(params));

	const deleteMutation = () => mutation.mutate(params);
	const isLoading = mutation.isLoading;
	const error = mutation.error;
	const isSuccess = mutation.isSuccess;

	return { deleteMutation, isLoading, error, isSuccess };
};

export default useDelete;
