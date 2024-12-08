import { Film } from '@shared/lib/gql';

interface FilmCardProps {
	film: Omit<Film, 'director_id'>;
}

export const FilmCard = ({ film }: FilmCardProps) => {
	return (
		<div className="w-fit">
			<img
				src={film.posterImg}
				className="min-h-[400px]"
				alt={`${film.title} poster`}
			/>
			<div className="p-2 w-fit">
				<h2 className="mb-2">{film.title}</h2>
				<p className="truncate mb-3">{film.subtitle}</p>
				<div className="flex text-gray-400">
					<p>{film.release}</p> · <p>{film.runningTime}</p>
				</div>
				<p>{film.director.name}</p>
			</div>
		</div>
	);
};
