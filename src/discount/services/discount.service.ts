import { Injectable } from '@nestjs/common';

@Injectable()
export class DiscountService {
  calculateINSS(salary: number): number {
    const inssFaixas = [
      { limite: 1302.0, aliquota: 0.075 },
      { limite: 2571.29, aliquota: 0.09 },
      { limite: 3856.94, aliquota: 0.12 },
      { limite: 7507.49, aliquota: 0.14 },
    ];

    let inss: number = 0;
    let salarioRestante: number = salary;

    for (const faixa of inssFaixas) {
      if (salarioRestante > faixa.limite) {
        inss += faixa.limite * faixa.aliquota;
        salarioRestante -= faixa.limite;
      } else {
        inss += salarioRestante * faixa.aliquota;
        break;
      }
    }

    return inss;
  }

  calculateIRRF(salary: number): number {
    const irrfFaixas = [
      { limite: 1903.98, aliquota: 0, deducao: 0 },
      { limite: 2826.65, aliquota: 0.075, deducao: 142.8 },
      { limite: 3751.05, aliquota: 0.15, deducao: 354.8 },
      { limite: 4664.68, aliquota: 0.225, deducao: 636.13 },
      { limite: Infinity, aliquota: 0.275, deducao: 869.36 },
    ];

    let irrf: number = 0;

    for (const faixa of irrfFaixas) {
      if (salary <= faixa.limite) {
        irrf = salary * faixa.aliquota - faixa.deducao;
        break;
      }
    }

    return irrf > 0 ? irrf : 0;
  }

  calculateNetSalary(salary: number): number {
    const inss: number = this.calculateINSS(salary);
    const salaryAfterINSS: number = salary - inss;
    const irrf: number = this.calculateIRRF(salaryAfterINSS);
    const netSalary: number = salaryAfterINSS - irrf;
    return parseFloat(netSalary.toFixed(2));
  }
}
