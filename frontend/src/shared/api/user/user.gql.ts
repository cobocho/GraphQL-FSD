import { graphql } from '@shared/lib/codegen';

export const SignUp = graphql(`
	mutation signup($signUpInput: UserCreateInput!) {
		signup(UserCreateInput: $signUpInput) {
			id
			username
			email
			password
		}
	}
`);
