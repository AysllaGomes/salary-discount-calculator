import { Injectable } from '@nestjs/common';

import { InssBracketsService } from '../../utils/inss/inss-brackets.service';
import { IrrfBracketsService } from '../../utils/irrf/irrf-brackets.service';

import { IOutputCalculateNetSalaryModels } from '../models/interface/output-calculate-net-salary.models';

@Injectable()
export class DiscountService {
  calculateNetSalary(
    salary: number,
    discount: number,
    dependents: number,
  ): IOutputCalculateNetSalaryModels {
    // Calcula INSS
    const inss: number = this.calculateINSS(salary);

    // Calcula salário após INSS
    const salaryAfterINSS: number = salary - inss;

    // Calcula IRRF com dependentes
    const irrf: number = this.calculateIRRF(salaryAfterINSS, dependents);

    // Calcula valor por dependente
    const deducaoPorDependente = 189.59;
    const valorPorDependente: number = dependents * deducaoPorDependente;

    const salaryAfterIRRF: number = salaryAfterINSS - irrf;

    // Aplica os descontos opcionais
    const salaryAfterDiscount: number = salaryAfterIRRF - discount;

    // Salário líquido
    const netSalary: number = parseFloat(salaryAfterDiscount.toFixed(2));

    // Retorna os dados detalhados
    return {
      valorPorDependente: valorPorDependente.toFixed(2),
      contribuicaoINSS: inss.toFixed(2),
      descontoIRRF: irrf.toFixed(2),
      salarioLiquido: netSalary.toFixed(2),
    };
  }

  calculateINSS(salary: number): number {
    let inss: number = 0;
    let salarioRestante: number = salary;

    for (const { limite, aliquota } of InssBracketsService.INSS_BRACKETS) {
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

  calculateIRRF(salary: number, dependents: number): number {
    // Dedução por dependente
    const deducaoPorDependente = 189.59;
    const deducaoTotalDependentes: number = dependents * deducaoPorDependente;

    let irrf: number = 0;

    for (const {
      limite,
      aliquota,
      deducao,
    } of IrrfBracketsService.IRRF_BRACKETS) {
      if (salary <= limite) {
        irrf = salary * aliquota - deducao - deducaoTotalDependentes;
        break;
      }
    }

    return irrf >= 0 ? irrf : 0;
  }
}
