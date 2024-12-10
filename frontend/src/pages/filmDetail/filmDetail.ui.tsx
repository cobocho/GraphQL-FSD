import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { CutQueries } from '@entities/cut';
import { FilmQueries } from '@entities/film';
import { AspectRatio } from '@shared/ui/aspect-ratio';
import { CutDialog } from './cut-dialog';

export const FilmDetailPage = () => {
	const { id } = useParams();

	const filmQuery = useSuspenseQuery(FilmQueries.getFilmById(Number(id)));
	const cutsQuery = useSuspenseQuery(CutQueries.getCutsByFilmId(Number(id)));

	const film = filmQuery.data.film;
	const year = new Date(film.release).getFullYear();

	const cuts = cutsQuery.data.cuts;

	return (
		<div className="flex gap-10 flex-col">
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
			<div className="grid grid-cols-3 gap-6">
				{cuts.map((c) => (
					<CutDialog
						cut={c}
						key={c.id}
					>
						<AspectRatio
							ratio={1.7 / 1}
							className=" bg-gray-200 rounded-xl overflow-hidden cursor-pointer"
						>
							<img
								src={c.src}
								alt={c.id.toString()}
								className="w-full h-full object-cover"
								loading="lazy"
							/>
						</AspectRatio>
					</CutDialog>
				))}
			</div>
		</div>
	);
};
