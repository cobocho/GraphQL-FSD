import { queryOptions } from '@tanstack/react-query';
import { filmService } from '@shared/api/film';

export class FilmQueries {
	private static keys = {
		films: ['films'] as const,
		filmById: (id: number) => [this.keys.films, id] as const,
	};

	public static getFilms(cursor: number, limit: number) {
		return queryOptions({
			queryKey: this.keys.films,
			queryFn: () => filmService.getFilms(cursor, limit),
			select: (data) => ({
				...data,
				films: data.films.films.map((f) => ({
					...f,
					genre: this.formatGenre(f.genre),
				})),
			}),
		});
	}

	public static getFilmById(id: number) {
		return queryOptions({
			queryKey: this.keys.filmById(id),
			queryFn: () => filmService.getFilmById(id),
			select: (data) => ({
				...data,
				film: {
					...data.film,
					genre: this.formatGenre(data.film.genre),
				},
			}),
		});
	}

	private static formatGenre(genre: string) {
		return genre.split(',').map((g) => g.trim());
	}
}
