import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Cut {
	@Field(() => Int, { description: '명장면 고유 ID' })
	id: number;

	@Field(() => String, { description: '명장면 이미지 URL' })
	src: string;

	@Field(() => Int, { description: '명장면 영화 ID' })
	filmId: number;
}
