/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
	'\n\tquery GetFilms($cursor: Int, $limit: Int) {\n\t\tfilms(cursor: $cursor, limit: $limit) {\n\t\t\tcursor\n\t\t\tfilms {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tsubtitle\n\t\t\t\trunningTime\n\t\t\t\trelease\n\t\t\t\tdescription\n\t\t\t\tposterImg\n\t\t\t\tgenre\n\t\t\t\tdirector {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n':
		types.GetFilmsDocument,
};

export function graphql(
	source: '\n\tquery GetFilms($cursor: Int, $limit: Int) {\n\t\tfilms(cursor: $cursor, limit: $limit) {\n\t\t\tcursor\n\t\t\tfilms {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tsubtitle\n\t\t\t\trunningTime\n\t\t\t\trelease\n\t\t\t\tdescription\n\t\t\t\tposterImg\n\t\t\t\tgenre\n\t\t\t\tdirector {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n',
): (typeof documents)['\n\tquery GetFilms($cursor: Int, $limit: Int) {\n\t\tfilms(cursor: $cursor, limit: $limit) {\n\t\t\tcursor\n\t\t\tfilms {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tsubtitle\n\t\t\t\trunningTime\n\t\t\t\trelease\n\t\t\t\tdescription\n\t\t\t\tposterImg\n\t\t\t\tgenre\n\t\t\t\tdirector {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n'];

export function graphql(source: string): unknown;
export function graphql(source: string) {
	return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
	TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
