import { Module } from '@nestjs/common';
import { DiscountService } from '../services/discount.service';
import { DiscountController } from '../controllers/discount.controller';

@Module({
  providers: [DiscountService],
  controllers: [DiscountController],
})
export class DiscountModule {}
