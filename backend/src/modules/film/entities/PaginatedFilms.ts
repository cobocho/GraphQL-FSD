import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Film } from 'src/@generated/film/film.model';

@ObjectType()
export class PaginatedFilms {
	@Field(() => [Film], { description: '영화 목록' })
	films: Film[];

	@Field(() => Int, { description: '다음 커서', nullable: true })
	cursor: number;
}
