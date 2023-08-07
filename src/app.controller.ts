import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/sum/:a/:b')
  getSum(@Param('a') a: string, @Param('b') b: string): any {
    if (isNaN(parseInt(a))) {
      return `a = <b>${a}</b> is not a number`;
    }
    if (isNaN(parseInt(b))) {
      return `b = <b>${b}</b> is not a number`;
    }
    const tempA = parseInt(a);
    const tempB = parseInt(b);
    return this.appService.sumNumber(tempA, tempB);
  }

  @Get('/minus')
  getMinus(@Query('a') a: string, @Query('b') b: string): any {
    if (isNaN(parseInt(a))) {
      return `a = <b>${a}</b> is not a number`;
    } else if (isNaN(parseInt(b))) {
      return `b = <b>${b}</b> is not a number`;
    }

    let tempA = parseInt(a);
    let tempB = parseInt(b);
    if (tempA < tempB) {
      [tempA, tempB] = [tempB, tempA];
    }
    return this.appService.minusNumber(tempA, tempB);
  }

  @Get('ops/:a/:b/:op')
  getOps(@Param('a') a: string, @Param('b') b: string, @Param('op') op: string): any {
    let tempA = parseFloat(a);
    let tempB = parseFloat(b);

    if (isNaN(tempA)) {
      return `a = ${tempA} is not a number`;
    } else if (isNaN(tempB)) {
      return `b = ${tempB} is not a number`;
    }

    switch (op) {
      case '+':
        return this.appService.sumNumber(tempA, tempB);
      case '-':
        return this.appService.minusNumber(tempA, tempB);
      case '*':
        return this.appService.multiplyNumber(tempA, tempB);
      case '/': // use %2f to use this case
        if (tempA < tempB) {
          [tempA, tempB] = [tempB, tempA];
        }
        return this.appService.divNumber(tempA, tempB);
      default:
        return 'operator not implemented';
    }
  }
}
