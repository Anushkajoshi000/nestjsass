import { Module } from '@nestjs/common';
import { OrdersService } from '../orders/orders.service';
import { OrdersController } from './orders.controller';

@Module({
  providers: [OrdersService],
  controllers: [OrdersController],
  exports: [OrdersService],
})
export class OrdersModule {}
