import { Controller, Get, Query } from '@nestjs/common';

import { DiscountService } from '../services/discount.service';

@Controller('discount')
export class DiscountController {
  constructor(private readonly discountService: DiscountService) {}

  @Get()
  calculateNetSalary(@Query('salary') salary: string): any {
    const salaryNum = parseFloat(salary);
    const netSalary = this.discountService.calculateNetSalary(salaryNum);
    return { netSalary };
  }
}
