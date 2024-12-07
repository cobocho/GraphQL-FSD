import { QueryClientProvider } from './QueryClientProvider';
import { BrowserRouterProvider } from './RouterProvider';

export const Providers = () => {
	return (
		<QueryClientProvider>
			<BrowserRouterProvider />
		</QueryClientProvider>
	);
};
