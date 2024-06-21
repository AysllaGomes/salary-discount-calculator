import { Controller, Get, Query } from '@nestjs/common';

import { DiscountService } from '../services/discount.service';

@Controller('discount')
export class DiscountController {
  constructor(protected readonly discountService: DiscountService) {}

  @Get()
  calculateNetSalary(
    @Query('salary') salary: string,
    @Query('discount') discount: string,
    @Query('dependents') dependents: string,
  ): any {
    const salaryNum: number = parseFloat(salary);
    const discountNum: number = discount ? parseFloat(discount) : 0;
    const dependentsNum: number = dependents ? parseInt(dependents, 10) : 0;

    return this.discountService.calculateNetSalary(
      salaryNum,
      discountNum,
      dependentsNum,
    );
  }
}
