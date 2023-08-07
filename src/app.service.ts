import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  sumNumber(a: number, b: number): string {
    return `${a} + ${b} = ${a + b}`;
  }

  minusNumber(a: number, b: number): string {
    return `${a} - ${b} = ${a - b}`;
  }

  multiplyNumber(a: number, b: number): string {
    return `${a} * ${b} = ${a * b}`;
  }

  divNumber(a: number, b: number): string {
    return `${a} / ${b} = ${a / b}`;
  }
}
