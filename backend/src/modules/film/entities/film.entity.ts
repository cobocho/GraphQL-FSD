import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Film {
	@Field(() => Int, { description: '영화 고유 ID' })
	id: number;

	@Field(() => String, { description: '영화 제목' })
	title: string;

	@Field(() => String, { nullable: true, description: '영화 서브 제목' })
	subtitle?: string;

	@Field(() => String, { description: '영화 장르' })
	genre: string;

	@Field(() => String, { description: '영화 줄거리 및 설명' })
	description: string;

	@Field(() => Int, { description: '영화 상영 시간' })
	runningTime: number;

	@Field(() => Int, { description: '영화 제작자 ID' })
	director_id: number;

	@Field(() => String, { description: '포스터 URL' })
	posterImg: string;

	@Field(() => String, { description: '영화 개봉일' })
	release: string;
}

@ObjectType()
export class PaginatedFilms {
	@Field(() => [Film], { description: '영화 목록' })
	films: Film[];

	@Field(() => Int, { description: '다음 커서', nullable: true })
	cursor: number;
}
