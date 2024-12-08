import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Director {
	@Field(() => Int, { description: '감독 고유 ID' })
	id: number;

	@Field(() => String, { description: '감독 이름' })
	name: string;
}
