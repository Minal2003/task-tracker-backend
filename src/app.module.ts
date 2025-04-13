import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module'; // ✅ Correct

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/task-tracker'),
    TaskModule,
    UserModule,
    AuthModule, // ✅ AuthService is already provided here
  ],
})
export class AppModule {}
