import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BasicLayout } from '@app/layout';
import { FilmPage } from '@pages/film';
import { FilmDetailPage } from '@pages/filmDetail';
import { FilmDetailPageSkeleton } from '@pages/filmDetail/filmDetail.skeleton';

const router = createBrowserRouter([
	{
		children: [
			{
				element: <BasicLayout />,
				children: [
					{
						path: '/',
						element: <FilmPage />,
					},
					{
						path: '/film/:id',
						element: (
							<Suspense fallback={<FilmDetailPageSkeleton />}>
								<FilmDetailPage />
							</Suspense>
						),
					},
				],
			},
		],
	},
]);

export const BrowserRouterProvider = () => {
	return <RouterProvider router={router} />;
};
