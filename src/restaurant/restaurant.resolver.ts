import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { RestaurantService } from '@app/restaurant/restaurant.service';

@Resolver(() => Restaurant)
export class RestaurantResolver {
  public constructor(
    private readonly _restaurantService: RestaurantService
  ) {}

  @Query(() => [Restaurant])
  public async restaurants(
    @Args('veganOnly') veganOnly: boolean,
  ): Promise<Array<Restaurant>> {
    return await this._restaurantService.getAll();
  }

  @Mutation(() => Boolean)
  public create(@Args() createRestaurantInput: CreateRestaurantDto): boolean {
    return true;
  }
}
