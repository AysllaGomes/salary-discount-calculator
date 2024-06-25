import { ApiProperty } from '@nestjs/swagger';

export class IOutputCalculateNetSalaryModels {
  @ApiProperty({ description: 'Valor por dependente', example: '189.59' })
  valorPorDependente: string;

  @ApiProperty({ description: 'Contribuição INSS', example: '200.00' })
  contribuicaoINSS: string;

  @ApiProperty({ description: 'Desconto IRRF', example: '100.00' })
  descontoIRRF: string;

  @ApiProperty({ description: 'Salário líquido', example: '2700.00' })
  salarioLiquido: string;
}
