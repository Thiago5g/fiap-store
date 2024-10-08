import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderModule } from './resources/orders/orders.module';
import { ProductModule } from './resources/products/products.module';

@Module({
  imports: [
    OrderModule,
    ProductModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'fiap',
      password: 'fiap',
      database: 'fiap-database',
      autoLoadEntities: true,
      synchronize: true, // Não recomendado em produção
    }),
  ],
})
export class AppModule {}
