import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { FilmPage } from '@pages/film';

const router = createBrowserRouter([
	{
		children: [
			{
				path: '/',
				element: <FilmPage />,
			},
		],
	},
]);

export const BrowserRouterProvider = () => {
	return <RouterProvider router={router} />;
};
