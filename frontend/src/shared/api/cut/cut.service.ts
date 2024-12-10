import { gqlClient } from '@shared/lib/react-query';
import { GetCutsByFilmId } from './cut.gql';

export const cutService = {
	getCutsByFilmId: (filmId: number) =>
		gqlClient.request(GetCutsByFilmId, { filmId }),
};
