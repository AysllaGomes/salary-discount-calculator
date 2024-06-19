import { Injectable } from '@nestjs/common';

import { TaxBracket } from '../models/interface/tax-bracket.models';

@Injectable()
export class DiscountService {
  private readonly inssBrackets: TaxBracket[] = [
    { limite: 1302.0, aliquota: 0.075, deducao: 0 },
    { limite: 2571.29, aliquota: 0.09, deducao: 0 },
    { limite: 3856.94, aliquota: 0.12, deducao: 0 },
    { limite: 7507.49, aliquota: 0.14, deducao: 0 },
  ];

  private readonly irrfBrackets: TaxBracket[] = [
    { limite: 1903.98, aliquota: 0, deducao: 0 },
    { limite: 2826.65, aliquota: 0.075, deducao: 142.8 },
    { limite: 3751.05, aliquota: 0.15, deducao: 354.8 },
    { limite: 4664.68, aliquota: 0.225, deducao: 636.13 },
    { limite: Infinity, aliquota: 0.275, deducao: 869.36 },
  ];

  calculateINSS(salary: number): number {
    let inss: number = 0;
    let salarioRestante: number = salary;

    for (const { limite, aliquota } of this.inssBrackets) {
      if (salarioRestante > limite) {
        inss += limite * aliquota;
        salarioRestante -= limite;
      } else {
        inss += salarioRestante * aliquota;
        break;
      }
    }

    return inss;
  }

  calculateIRRF(salary: number): number {
    let irrf: number = 0;

    for (const { limite, aliquota, deducao } of this.irrfBrackets) {
      if (salary <= limite) {
        irrf = salary * aliquota - deducao;
        break;
      }
    }

    return Math.max(irrf, 0);
  }

  calculateNetSalary(salary: number): number {
    const inss: number = this.calculateINSS(salary);
    const salaryAfterINSS: number = salary - inss;
    const irrf: number = this.calculateIRRF(salaryAfterINSS);
    return parseFloat((salaryAfterINSS - irrf).toFixed(2));
  }
}
