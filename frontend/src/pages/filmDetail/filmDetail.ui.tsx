import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { FilmQueries } from '@entities/film';

export const FilmDetailPage = () => {
	const { id } = useParams();

	const { data } = useSuspenseQuery(FilmQueries.getFilmById(Number(id)));

	const film = data.film;
	const year = new Date(film.release).getFullYear();

	return (
		<div>
			<div className="flex gap-8 items-center">
				<div className="h-[400px] w-[280px]">
					<img
						src={film.posterImg}
						className="rounded-xl w-full h-full object-cover"
						alt={film.title}
					/>
				</div>
				<div className="flex flex-col flex-1">
					<ul className="flex gap-2 mb-3">
						{film.genre.map((g) => (
							<li
								key={g}
								className="bg-gray-200 px-1 rounded-md"
							>
								<span className="text-xs">{g}</span>
							</li>
						))}
					</ul>
					<h1 className="text-4xl font-bold mb-4">
						{film.title} ({year})
					</h1>
					<p className="text-lg font-semibold mb-2">{film.subtitle}</p>
					<div className="flex gap-1 text-gray-500 mb-4">
						<p>{film.director.name}</p>
						<p> | </p>
						<p>{film.runningTime}분</p>
					</div>
					<div>
						<p className="text-sm">{film.description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
