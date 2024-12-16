import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: 'http://localhost:3000/graphql',
	documents: ['src/**/*.ts', '!src/shared/lib/gql/**/*'],
	generates: {
		'./src/shared/lib/codegen/': {
			preset: 'client',
			plugins: [],
			overwrite: true,
		},
	},
};

export default config;
