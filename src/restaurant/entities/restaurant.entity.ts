import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field(() => Number)
  public id: number;

  @Field(() => String)
  @Column()
  public name: string;

  @Field(() => Boolean)
  @Column()
  public isVegan: boolean;

  @Field(() => String)
  @Column()
  public address: string;

  @Field(() => String)
  @Column()
  public ownersName: string;

  @Field(() => String)
  @Column()
  public categoryName: string;
}
