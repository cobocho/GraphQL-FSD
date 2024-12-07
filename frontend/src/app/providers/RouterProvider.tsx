import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		children: [
			{
				path: '/',
				element: <div>Home</div>,
			},
		],
	},
]);

export const BrowserRouterProvider = () => {
	return <RouterProvider router={router} />;
};
