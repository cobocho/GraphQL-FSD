import { UserCreateInput } from '@shared/lib/codegen';
import { gqlClient } from '@shared/lib/react-query';
import { SignUp } from './user.gql';

export const userService = {
	signup: (signUpInput: UserCreateInput) =>
		gqlClient.request(SignUp, { signUpInput }),
};
