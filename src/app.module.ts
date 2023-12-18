import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffees.controller';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [],
  controllers: [AppController, CoffeesController, CatsController],
  providers: [AppService],
})
export class AppModule {}
