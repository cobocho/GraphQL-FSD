import { QueryClientProvider as QueryClientProviderBase } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PropsWithChildren } from 'react';
import { queryClient } from '@shared/lib/react-query';

export const QueryClientProvider = ({ children }: PropsWithChildren) => {
	return (
		<QueryClientProviderBase client={queryClient}>
			{children}
			<ReactQueryDevtools />
		</QueryClientProviderBase>
	);
};
