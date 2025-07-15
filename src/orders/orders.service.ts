import { NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { CreateOrderDto } from './dto/create-order.dto';

export class OrdersService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(_createOrderDto: CreateOrderDto) {
    throw new Error('Method not implemented.');
  }
  findAll() {
    throw new Error('Method not implemented.');
  }
  findById(id: number) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data = JSON.parse(
      fs.readFileSync(
        path.join(__dirname, '..', '..', 'data', 'orders.json'),
        'utf-8',
      ),
    );
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const order = data.find((o) => o.id === id);
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return order;
  }
}
