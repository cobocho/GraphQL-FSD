/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Film } from '@shared/lib/codegen';

interface FilmCardProps {
	film: Omit<Film, 'director_id'>;
	onClick?: (film: Omit<Film, 'director_id'>) => void;
}

export const FilmCard = ({ film, onClick }: FilmCardProps) => {
	return (
		<div
			className="w-full"
			onClick={() => onClick?.(film)}
		>
			<img
				src={film.posterImg}
				className="w-full min-h-[400px] object-cover rounded-lg"
				alt={`${film.title} poster`}
			/>
			<div className="p-2 w-fit">
				<h2 className="mb-2 font-bold text-lg">{film.title}</h2>
				<p className="truncate mb-3">{film.subtitle}</p>
				<div className="flex text-gray-400">
					<p>{film.release}</p> · <p>{film.runningTime}</p>
				</div>
				<p>{film.director.name}</p>
			</div>
		</div>
	);
};
