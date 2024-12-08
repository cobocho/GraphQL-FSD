import { gqlClient } from '@shared/lib/react-query';
import { GetFilmById, GetFilms } from './film.gql';

export const filmService = {
	getFilms: (cursor: number, limit: number) =>
		gqlClient.request(GetFilms, { cursor, limit }),
	getFilmById: (id: number) => gqlClient.request(GetFilmById, { id }),
};
