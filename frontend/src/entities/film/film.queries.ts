import { queryOptions } from '@tanstack/react-query';
import { filmService } from '@shared/api/film';
import { Film } from '@shared/lib/gql';

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
				films: data.films.films.map((f) => this.formatFilm(f)),
			}),
		});
	}

	public static getFilmById(id: number) {
		return queryOptions({
			queryKey: this.keys.filmById(id),
			queryFn: () => filmService.getFilmById(id),
			select: (data) => ({
				...data,
				film: this.formatFilm(data.film),
			}),
		});
	}

	private static formatFilm(film: Omit<Film, 'director_id'>) {
		return {
			...film,
			genre: film.genre.split(',').map((g) => g.trim()),
		};
	}
}
