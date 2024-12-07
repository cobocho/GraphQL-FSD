import { useQuery } from '@tanstack/react-query';
import { gqlClient } from '@shared/lib/gql';

export const useGetFilmsQuery = () => {
	const { data } = useQuery({
		queryKey: ['films'],
		queryFn: () => gqlClient.request(Fils),
	});
};
