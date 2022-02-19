import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsString } from 'class-validator';

@ArgsType()
export class CreateRestaurantDto {
  @Field(() => String)
  @IsString()
  public name: string;

  @Field(() => Boolean)
  @IsBoolean()
  public isVegan: boolean;

  @Field(() => String)
  @IsString()
  public address: string;

  @Field(() => String)
  @IsString()
  public ownerName: string;
}
