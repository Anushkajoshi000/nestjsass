import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class UsersService {
  private dataPath = path.join(__dirname, '..', '..', 'data', 'users.json');

  findAll() {
    const data = fs.readFileSync(this.dataPath, 'utf-8');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return JSON.parse(data);
  }
}
