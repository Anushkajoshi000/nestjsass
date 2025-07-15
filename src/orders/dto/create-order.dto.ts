import { IsNumber, IsArray, ArrayNotEmpty, Min } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  userId: number;

  @IsArray()
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  productIds: number[];

  @IsNumber()
  @Min(0)
  total: number;
}
