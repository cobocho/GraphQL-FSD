/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n\tquery GetAllFilms {\n\t\tfilms {\n\t\t\tid\n\t\t\ttitle\n\t\t\tsubtitle\n\t\t\trunningTime\n\t\t\trelease\n\t\t\tdescription\n\t\t\tposterImg\n\t\t}\n\t}\n": types.GetAllFilmsDocument,
};

export function graphql(source: "\n\tquery GetAllFilms {\n\t\tfilms {\n\t\t\tid\n\t\t\ttitle\n\t\t\tsubtitle\n\t\t\trunningTime\n\t\t\trelease\n\t\t\tdescription\n\t\t\tposterImg\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetAllFilms {\n\t\tfilms {\n\t\t\tid\n\t\t\ttitle\n\t\t\tsubtitle\n\t\t\trunningTime\n\t\t\trelease\n\t\t\tdescription\n\t\t\tposterImg\n\t\t}\n\t}\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;