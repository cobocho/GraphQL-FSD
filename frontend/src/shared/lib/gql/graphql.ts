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

export type Director = {
	__typename?: 'Director';
	/** 감독 고유 ID */
	id: Scalars['Int'];
	/** 감독 이름 */
	name: Scalars['String'];
};

export type Film = {
	__typename?: 'Film';
	/** 영화 줄거리 및 설명 */
	description: Scalars['String'];
	director: Director;
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

export type PaginatedFilms = {
	__typename?: 'PaginatedFilms';
	/** 다음 커서 */
	cursor: Scalars['Int'];
	/** 영화 목록 */
	films: Array<Film>;
};

export type Query = {
	__typename?: 'Query';
	films: PaginatedFilms;
};

export type QueryFilmsArgs = {
	cursor?: InputMaybe<Scalars['Int']>;
	limit?: InputMaybe<Scalars['Int']>;
};

export type GetFilmsQueryVariables = Exact<{
	cursor?: InputMaybe<Scalars['Int']>;
	limit?: InputMaybe<Scalars['Int']>;
}>;

export type GetFilmsQuery = {
	__typename?: 'Query';
	films: {
		__typename?: 'PaginatedFilms';
		cursor: number;
		films: Array<{
			__typename?: 'Film';
			id: number;
			title: string;
			subtitle?: string | null;
			runningTime: number;
			release: string;
			description: string;
			posterImg: string;
			genre: string;
			director: { __typename?: 'Director'; id: number; name: string };
		}>;
	};
};

export const GetFilmsDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'GetFilms' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: {
						kind: 'Variable',
						name: { kind: 'Name', value: 'cursor' },
					},
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
				},
				{
					kind: 'VariableDefinition',
					variable: {
						kind: 'Variable',
						name: { kind: 'Name', value: 'limit' },
					},
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'films' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'cursor' },
								value: {
									kind: 'Variable',
									name: { kind: 'Name', value: 'cursor' },
								},
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'limit' },
								value: {
									kind: 'Variable',
									name: { kind: 'Name', value: 'limit' },
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'cursor' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'films' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'subtitle' },
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'runningTime' },
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'release' },
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'description' },
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'posterImg' },
											},
											{ kind: 'Field', name: { kind: 'Name', value: 'genre' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'director' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'id' },
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'name' },
														},
													],
												},
											},
										],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<GetFilmsQuery, GetFilmsQueryVariables>;
