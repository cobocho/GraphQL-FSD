import { Resolver, Query } from '@nestjs/graphql';
import { FilmService } from './film.service';
import { Film } from './entities/film.entity';

@Resolver(() => Film)
export class FilmResolver {
  constructor(private readonly filmService: FilmService) {}

  @Query(() => [Film])
  films() {
    return this.filmService.getFilms();
  }
}
