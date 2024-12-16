import { UseMutationOptions } from '@tanstack/react-query';
import { userService } from '@shared/api/user';
import { SignupMutation, UserCreateInput } from '@shared/lib/codegen';

export class UserMutations {
	public static signup(
		options: UseMutationOptions<SignupMutation, Error, UserCreateInput>,
	) {
		return {
			mutationFn: userService.signup,
			...options,
		};
	}
}
