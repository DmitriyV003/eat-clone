import { Injectable } from '@nestjs/common';
import { Restaurant } from '@app/restaurant/entities/restaurant.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RestaurantService {

  public constructor(
    @InjectRepository(Restaurant)
    private readonly _restaurants: Repository<Restaurant>
  ) {}

  public async getAll(): Promise<Array<Restaurant>> {
    return await this._restaurants.find();
  }
}
