/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
	'\n\tquery cuts($filmId: Int!) {\n\t\tcuts(filmId: $filmId) {\n\t\t\tid\n\t\t\tsrc\n\t\t\tfilm {\n\t\t\t\ttitle\n\t\t\t}\n\t\t}\n\t}\n':
		types.CutsDocument,
	'\n\tquery GetFilms($cursor: Int, $limit: Int) {\n\t\tfilms(cursor: $cursor, limit: $limit) {\n\t\t\tcursor\n\t\t\tfilms {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tsubtitle\n\t\t\t\trunningTime\n\t\t\t\trelease\n\t\t\t\tdescription\n\t\t\t\tposterImg\n\t\t\t\tgenre\n\t\t\t\tdirector {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n':
		types.GetFilmsDocument,
	'\n\tquery GetFilmById($id: Int!) {\n\t\tfilm(id: $id) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tsubtitle\n\t\t\trunningTime\n\t\t\tid\n\t\t\ttitle\n\t\t\tsubtitle\n\t\t\trunningTime\n\t\t\trelease\n\t\t\tdescription\n\t\t\tposterImg\n\t\t\tgenre\n\t\t\tdirector {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n':
		types.GetFilmByIdDocument,
	'\n\tmutation signup($signUpInput: UserCreateInput!) {\n\t\tsignup(UserCreateInput: $signUpInput) {\n\t\t\tid\n\t\t\tusername\n\t\t\temail\n\t\t\tpassword\n\t\t}\n\t}\n':
		types.SignupDocument,
};

export function graphql(
	source: '\n\tquery cuts($filmId: Int!) {\n\t\tcuts(filmId: $filmId) {\n\t\t\tid\n\t\t\tsrc\n\t\t\tfilm {\n\t\t\t\ttitle\n\t\t\t}\n\t\t}\n\t}\n',
): (typeof documents)['\n\tquery cuts($filmId: Int!) {\n\t\tcuts(filmId: $filmId) {\n\t\t\tid\n\t\t\tsrc\n\t\t\tfilm {\n\t\t\t\ttitle\n\t\t\t}\n\t\t}\n\t}\n'];
export function graphql(
	source: '\n\tquery GetFilms($cursor: Int, $limit: Int) {\n\t\tfilms(cursor: $cursor, limit: $limit) {\n\t\t\tcursor\n\t\t\tfilms {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tsubtitle\n\t\t\t\trunningTime\n\t\t\t\trelease\n\t\t\t\tdescription\n\t\t\t\tposterImg\n\t\t\t\tgenre\n\t\t\t\tdirector {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n',
): (typeof documents)['\n\tquery GetFilms($cursor: Int, $limit: Int) {\n\t\tfilms(cursor: $cursor, limit: $limit) {\n\t\t\tcursor\n\t\t\tfilms {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tsubtitle\n\t\t\t\trunningTime\n\t\t\t\trelease\n\t\t\t\tdescription\n\t\t\t\tposterImg\n\t\t\t\tgenre\n\t\t\t\tdirector {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n'];
export function graphql(
	source: '\n\tquery GetFilmById($id: Int!) {\n\t\tfilm(id: $id) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tsubtitle\n\t\t\trunningTime\n\t\t\tid\n\t\t\ttitle\n\t\t\tsubtitle\n\t\t\trunningTime\n\t\t\trelease\n\t\t\tdescription\n\t\t\tposterImg\n\t\t\tgenre\n\t\t\tdirector {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n',
): (typeof documents)['\n\tquery GetFilmById($id: Int!) {\n\t\tfilm(id: $id) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tsubtitle\n\t\t\trunningTime\n\t\t\tid\n\t\t\ttitle\n\t\t\tsubtitle\n\t\t\trunningTime\n\t\t\trelease\n\t\t\tdescription\n\t\t\tposterImg\n\t\t\tgenre\n\t\t\tdirector {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n'];
export function graphql(
	source: '\n\tmutation signup($signUpInput: UserCreateInput!) {\n\t\tsignup(UserCreateInput: $signUpInput) {\n\t\t\tid\n\t\t\tusername\n\t\t\temail\n\t\t\tpassword\n\t\t}\n\t}\n',
): (typeof documents)['\n\tmutation signup($signUpInput: UserCreateInput!) {\n\t\tsignup(UserCreateInput: $signUpInput) {\n\t\t\tid\n\t\t\tusername\n\t\t\temail\n\t\t\tpassword\n\t\t}\n\t}\n'];

export function graphql(source: string): unknown;
export function graphql(source: string) {
	return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
	TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
