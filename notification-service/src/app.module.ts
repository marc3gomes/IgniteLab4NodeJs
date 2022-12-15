import { Module } from '@nestjs/common';
import { DatebaseModule } from './infra/database/database.module';
import { httpModule } from './infra/http/http.module';

@Module({
  imports: [httpModule, DatebaseModule],
})
export class AppModule {}
