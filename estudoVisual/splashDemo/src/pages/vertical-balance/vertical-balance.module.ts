import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VerticalBalancePage } from './vertical-balance';

@NgModule({
  declarations: [
    VerticalBalancePage,
  ],
  imports: [
    IonicPageModule.forChild(VerticalBalancePage),
  ],
})
export class VerticalBalancePageModule {}
