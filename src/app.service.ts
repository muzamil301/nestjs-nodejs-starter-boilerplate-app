import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello() {
    // return 'Hello World!';

    // const data = await this.catsController.findAll();
    console.log('data');
  }
}
