import { useInfiniteQuery } from '@tanstack/react-query';

import { useInView } from 'framer-motion';

import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FilmCard } from '@entities/film';
import { filmService } from '@shared/api/film';
import { cn } from '@shared/lib/cn';

export const FilmPage = () => {
	const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery({
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

	useEffect(() => {
		if (lastRefInView && !isFetching) {
			fetchNextPage();
		}
	}, [lastRefInView, fetchNextPage, isFetching]);

	return (
		<div>
			<h1 className="text-3xl font-bold mb-10">최고의 장면을 찾아보세요</h1>
			<div className="grid grid-cols-3 w-fit gap-8 gap-y-4">
				{films.map((film) => (
					<Link
						to={`/film/${film.id}`}
						key={film.id}
					>
						<FilmCard film={film} />
					</Link>
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
