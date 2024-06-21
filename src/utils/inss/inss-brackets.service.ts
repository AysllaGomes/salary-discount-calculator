import { TaxBracket } from '../../discount/models/interface/tax-bracket.models';
import { TaxBraketEnum } from '../../discount/models/enums/tax-braket.enum';

export class InssBracketsService {
  static readonly INSS_BRACKETS: TaxBracket[] = [
    { limite: 1302.0, aliquota: 0.075, deducao: TaxBraketEnum.ZERO_DEDUCTION },
    { limite: 2571.29, aliquota: 0.09, deducao: TaxBraketEnum.ZERO_DEDUCTION },
    { limite: 3856.94, aliquota: 0.12, deducao: TaxBraketEnum.ZERO_DEDUCTION },
    { limite: 7507.49, aliquota: 0.14, deducao: TaxBraketEnum.ZERO_DEDUCTION },
  ];
}
