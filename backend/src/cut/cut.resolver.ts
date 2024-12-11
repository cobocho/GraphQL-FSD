import {
	Args,
	Int,
	Query,
	ResolveField,
	Resolver,
	Root,
} from '@nestjs/graphql';
import { CutService } from './cut.service';
import { FilmService } from 'src/modules/film/film.service';
import { Cut } from 'src/@generated/cut/cut.model';
import { Film } from 'src/@generated/film/film.model';

@Resolver(() => Cut)
export class CutResolver {
	constructor(
		private readonly cutService: CutService,
		private readonly filmService: FilmService,
	) {}

	@Query(() => [Cut])
	cuts(@Args('filmId', { type: () => Int }) filmId: number) {
		return this.cutService.getCutByFilmId(filmId);
	}

	@ResolveField(() => Film)
	film(@Root() cut: Cut) {
		return this.filmService.getFilmById(cut.filmId);
	}
}
