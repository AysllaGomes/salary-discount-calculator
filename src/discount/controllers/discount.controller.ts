import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

import { DiscountService } from '../services/discount.service';

import { IOutputCalculateNetSalaryModels } from '../models/interface/output-calculate-net-salary.models';

@ApiTags('discount')
@Controller('discount')
export class DiscountController {
  constructor(protected readonly discountService: DiscountService) {}

  @Get()
  @ApiOperation({ summary: 'Calcular o salário líquido' })
  @ApiQuery({ name: 'salary', type: String, description: 'Salário bruto' })
  @ApiQuery({
    name: 'discount',
    type: String,
    required: false,
    description: 'Desconto opcional',
  })
  @ApiQuery({
    name: 'dependents',
    type: String,
    required: false,
    description: 'Número de dependentes',
  })
  @ApiResponse({
    status: 200,
    description: 'Retorna o cálculo do salário líquido',
    type: IOutputCalculateNetSalaryModels,
  })
  calculateNetSalary(
    @Query('salary') salary: string,
    @Query('discount') discount: string,
    @Query('dependents') dependents: string,
  ): IOutputCalculateNetSalaryModels {
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
