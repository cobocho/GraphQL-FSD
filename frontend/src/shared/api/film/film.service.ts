import { gqlClient } from '@shared/lib/react-query';
import { GetAllFilms } from './film.gql';

export const filmService = {
	getAllFilms: () => gqlClient.request(GetAllFilms),
};
