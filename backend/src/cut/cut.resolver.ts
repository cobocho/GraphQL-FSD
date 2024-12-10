import {
	Args,
	Int,
	Query,
	ResolveField,
	Resolver,
	Root,
} from '@nestjs/graphql';
import { CutService } from './cut.service';
import { Cut } from './entities/cut.entity';
import { Film } from 'src/modules/film/entities/film.entity';
import { FilmService } from 'src/modules/film/film.service';

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
