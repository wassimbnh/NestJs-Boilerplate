import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule} from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    UsersModule
  ],

})
export class AppModule {}
