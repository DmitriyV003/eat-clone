import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';

@Resolver(() => Restaurant)
export class RestaurantResolver {
  @Query(() => [Restaurant])
  public restaurants(@Args('veganOnly') veganOnly: boolean): Array<Restaurant> {
    return [];
  }

  @Mutation(() => Boolean)
  public create(@Args() createRestaurantInput: CreateRestaurantDto): boolean {
    return true;
  }
}
