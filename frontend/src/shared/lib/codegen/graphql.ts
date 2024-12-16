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
	/** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
	DateTime: any;
};

export type Cut = {
	__typename?: 'Cut';
	film: Film;
	filmId: Scalars['Int'];
	id: Scalars['ID'];
	src: Scalars['String'];
};

export type Director = {
	__typename?: 'Director';
	_count: DirectorCount;
	films?: Maybe<Array<Film>>;
	id: Scalars['ID'];
	name: Scalars['String'];
};

export type DirectorCount = {
	__typename?: 'DirectorCount';
	films: Scalars['Int'];
};

export type Film = {
	__typename?: 'Film';
	Cut?: Maybe<Array<Cut>>;
	_count: FilmCount;
	description: Scalars['String'];
	director: Director;
	director_id: Scalars['Int'];
	genre: Scalars['String'];
	id: Scalars['ID'];
	posterImg: Scalars['String'];
	release: Scalars['String'];
	runningTime: Scalars['Int'];
	subtitle?: Maybe<Scalars['String']>;
	title: Scalars['String'];
};

export type FilmCount = {
	__typename?: 'FilmCount';
	Cut: Scalars['Int'];
};

export type Mutation = {
	__typename?: 'Mutation';
	signup: User;
};

export type MutationSignupArgs = {
	UserCreateInput: UserCreateInput;
};

export type PaginatedFilms = {
	__typename?: 'PaginatedFilms';
	/** 다음 커서 */
	cursor?: Maybe<Scalars['Int']>;
	/** 영화 목록 */
	films: Array<Film>;
};

export type Query = {
	__typename?: 'Query';
	cuts: Array<Cut>;
	film: Film;
	films: PaginatedFilms;
};

export type QueryCutsArgs = {
	filmId: Scalars['Int'];
};

export type QueryFilmArgs = {
	id: Scalars['Int'];
};

export type QueryFilmsArgs = {
	cursor?: InputMaybe<Scalars['Int']>;
	limit?: InputMaybe<Scalars['Int']>;
};

export type User = {
	__typename?: 'User';
	createdAt: Scalars['DateTime'];
	email: Scalars['String'];
	id: Scalars['ID'];
	password: Scalars['String'];
	updatedAt: Scalars['DateTime'];
	username: Scalars['String'];
};

export type UserCreateInput = {
	createdAt?: InputMaybe<Scalars['DateTime']>;
	email: Scalars['String'];
	password: Scalars['String'];
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	username: Scalars['String'];
};

export type CutsQueryVariables = Exact<{
	filmId: Scalars['Int'];
}>;

export type CutsQuery = {
	__typename?: 'Query';
	cuts: Array<{
		__typename?: 'Cut';
		id: string;
		src: string;
		film: { __typename?: 'Film'; title: string };
	}>;
};

export type GetFilmsQueryVariables = Exact<{
	cursor?: InputMaybe<Scalars['Int']>;
	limit?: InputMaybe<Scalars['Int']>;
}>;

export type GetFilmsQuery = {
	__typename?: 'Query';
	films: {
		__typename?: 'PaginatedFilms';
		cursor?: number | null;
		films: Array<{
			__typename?: 'Film';
			id: string;
			title: string;
			subtitle?: string | null;
			runningTime: number;
			release: string;
			description: string;
			posterImg: string;
			genre: string;
			director: { __typename?: 'Director'; id: string; name: string };
		}>;
	};
};

export type GetFilmByIdQueryVariables = Exact<{
	id: Scalars['Int'];
}>;

export type GetFilmByIdQuery = {
	__typename?: 'Query';
	film: {
		__typename?: 'Film';
		id: string;
		title: string;
		subtitle?: string | null;
		runningTime: number;
		release: string;
		description: string;
		posterImg: string;
		genre: string;
		director: { __typename?: 'Director'; id: string; name: string };
	};
};

export type SignupMutationVariables = Exact<{
	signUpInput: UserCreateInput;
}>;

export type SignupMutation = {
	__typename?: 'Mutation';
	signup: {
		__typename?: 'User';
		id: string;
		username: string;
		email: string;
		password: string;
	};
};

export const CutsDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'cuts' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: {
						kind: 'Variable',
						name: { kind: 'Name', value: 'filmId' },
					},
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'cuts' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'filmId' },
								value: {
									kind: 'Variable',
									name: { kind: 'Name', value: 'filmId' },
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'src' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'film' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
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
} as unknown as DocumentNode<CutsQuery, CutsQueryVariables>;
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
export const GetFilmByIdDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'GetFilmById' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'film' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'id' },
								value: {
									kind: 'Variable',
									name: { kind: 'Name', value: 'id' },
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'runningTime' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'runningTime' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'release' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'posterImg' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'genre' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'director' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
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
} as unknown as DocumentNode<GetFilmByIdQuery, GetFilmByIdQueryVariables>;
export const SignupDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'mutation',
			name: { kind: 'Name', value: 'signup' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: {
						kind: 'Variable',
						name: { kind: 'Name', value: 'signUpInput' },
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: { kind: 'Name', value: 'UserCreateInput' },
						},
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'signup' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'UserCreateInput' },
								value: {
									kind: 'Variable',
									name: { kind: 'Name', value: 'signUpInput' },
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'username' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'email' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'password' } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<SignupMutation, SignupMutationVariables>;
