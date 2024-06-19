import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { DiscountModule } from '../../discount/module/discount.module';

@Module({
  imports: [DiscountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
