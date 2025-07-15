import { Controller, Get, Param, Post, Body, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { IdValidationPipe } from '../common/pipes/id-validation.pipe';
import { AuthGuard } from '../common/guards/auth.guard';
import { CreateOrderDto } from './dto/create-order.dto';

@UseGuards(AuthGuard)
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', IdValidationPipe) id: number) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.ordersService.findById(id);
  }

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }
}
