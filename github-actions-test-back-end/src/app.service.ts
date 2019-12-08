import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getGood(): string {
    return 'Git Gud';
  }

  getGoodBye(): string {
    return 'Bye';
  }
}
