import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Director } from '../director/director.model';
import { Cut } from '../cut/cut.model';
import { FilmCount } from './film-count.output';

@ObjectType()
export class Film {
	@Field(() => ID, { nullable: false })
	id!: number;

	@Field(() => String, { nullable: false })
	title!: string;

	@Field(() => String, { nullable: true })
	subtitle!: string | null;

	@Field(() => String, { nullable: false })
	genre!: string;

	@Field(() => String, { nullable: false })
	description!: string;

	@Field(() => Int, { nullable: false })
	runningTime!: number;

	@Field(() => Int, { nullable: false })
	director_id!: number;

	@Field(() => String, { nullable: false })
	posterImg!: string;

	@Field(() => String, { nullable: false })
	release!: string;

	@Field(() => Director, { nullable: false })
	director?: Director;

	@Field(() => [Cut], { nullable: true })
	Cut?: Array<Cut>;

	@Field(() => FilmCount, { nullable: false })
	_count?: FilmCount;
}
