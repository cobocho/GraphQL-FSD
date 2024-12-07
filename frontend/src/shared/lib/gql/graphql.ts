/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
};

export type Film = {
	__typename?: 'Film';
	/** 영화 줄거리 및 설명 */
	description: Scalars['String'];
	/** 영화 제작자 ID */
	director_id: Scalars['Int'];
	/** 영화 장르 */
	genre: Scalars['String'];
	/** 영화 고유 ID */
	id: Scalars['Int'];
	/** 포스터 URL */
	posterImg: Scalars['String'];
	/** 영화 개봉일 */
	release: Scalars['String'];
	/** 영화 상영 시간 */
	runningTime: Scalars['Int'];
	/** 영화 서브 제목 */
	subtitle?: Maybe<Scalars['String']>;
	/** 영화 제목 */
	title: Scalars['String'];
};

export type Query = {
	__typename?: 'Query';
	films: Array<Film>;
};

export type GetAllFilmsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllFilmsQuery = {
	__typename?: 'Query';
	films: Array<{
		__typename?: 'Film';
		id: number;
		title: string;
		subtitle?: string | null;
		runningTime: number;
		release: string;
		description: string;
		posterImg: string;
	}>;
};

export const GetAllFilmsDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'GetAllFilms' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'films' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'runningTime' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'release' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'posterImg' } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<GetAllFilmsQuery, GetAllFilmsQueryVariables>;
