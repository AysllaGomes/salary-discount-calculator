import { TaxBraketEnum } from '../../discount/models/enums/tax-braket.enum';

import { TaxBracket } from '../../discount/models/interface/tax-bracket.models';

export class IrrfBracketsService {
  static readonly IRRF_BRACKETS: TaxBracket[] = [
    {
      limite: 1903.98,
      aliquota: TaxBraketEnum.ZERO_DEDUCTION,
      deducao: TaxBraketEnum.ZERO_DEDUCTION,
    },
    { limite: 2826.65, aliquota: 0.075, deducao: 142.8 },
    { limite: 3751.05, aliquota: 0.15, deducao: 354.8 },
    { limite: 4664.68, aliquota: 0.225, deducao: 636.13 },
    { limite: Infinity, aliquota: 0.275, deducao: 869.36 },
  ];
}
