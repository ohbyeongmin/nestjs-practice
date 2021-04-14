import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.dto';

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((type) => User)
  users(): boolean {
    return true;
  }

  @Mutation((type) => Boolean)
  async createUser(
    @Args('input') createUserInput: CreateUserInput,
  ): Promise<boolean> {
    await this.userService.createUser(createUserInput);
    return true;
  }
}
