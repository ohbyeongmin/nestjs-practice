import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsNumber, IsString, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  @IsNumber()
  id: number;

  @Column()
  @Field((type) => String)
  @IsString()
  @Length(3, 5)
  name: string;

  @Column()
  @Field((type) => String)
  @IsString()
  password: string;

  @Column()
  @Field((type) => String)
  @IsEmail()
  email: string;

  @Column()
  @Field((type) => String)
  @IsString()
  gender: string;
}
