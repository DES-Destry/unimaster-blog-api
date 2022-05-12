import { forwardRef, Module } from '@nestjs/common';
import { UserSubscriptionService } from './subscription.service';
import { UserSubscriptionController } from './subscription.controller';
import { UserSubscriptionRepository } from './repositories/subscription.repository';
import { UserModule } from 'src/modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSubscriptionEntity } from './subscription.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserSubscriptionEntity]),
    forwardRef(() => UserModule),
  ],
  providers: [
    UserSubscriptionService,
    {
      provide: 'IUserSubscriptionRepository',
      useClass: UserSubscriptionRepository,
    },
  ],
  controllers: [UserSubscriptionController],
})
export class UserSubscriptionModule {}
