import { useInfiniteQuery } from '@tanstack/react-query';

import { useInView } from 'framer-motion';

import { useEffect, useRef, useState } from 'react';
import { FilmCard } from '@entities/film';
import { filmService } from '@shared/api/film';
import { cn } from '@shared/lib/cn';

export const FilmPage = () => {
	const { data, isFetched, isFetching, hasNextPage, fetchNextPage } =
		useInfiniteQuery({
			initialPageParam: 1,
			queryKey: ['films'],
			queryFn: ({ pageParam }) => filmService.getFilms(pageParam, 6),
			getNextPageParam: (lastPage) =>
				lastPage.films.cursor ? lastPage.films.cursor + 1 : undefined,
			initialData: {
				pageParams: [1],
				pages: [],
			},
		});

	const films = data.pages.flatMap((page) => page.films.films) ?? [];
	const lastRef = useRef<HTMLDivElement>(null);
	const lastRefInView = useInView(lastRef);

	const [canFetch, setCanFetch] = useState(false);

	useEffect(() => {
		if (!isFetched) {
			return;
		}

		setTimeout(() => {
			setCanFetch(true);
		}, 1000);
	}, [isFetched]);

	useEffect(() => {
		if (lastRefInView && canFetch && !isFetching) {
			fetchNextPage();
		}
	}, [lastRefInView, canFetch, fetchNextPage, isFetching]);

	return (
		<div>
			<h1>Film</h1>
			<div className="grid grid-cols-3  w-fit gap-4 gap-y-4">
				{films.map((film) => (
					<FilmCard
						film={film}
						key={film.id}
					/>
				))}
			</div>
			{isFetching && <div>Loading...</div>}
			<div
				ref={lastRef}
				className={cn(' w-1 h-1 ', (!hasNextPage || isFetching) && 'hidden')}
			/>
		</div>
	);
};
