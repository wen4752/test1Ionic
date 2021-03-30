import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hal4PageRoutingModule } from './hal4-routing.module';

import { Hal4Page } from './hal4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hal4PageRoutingModule
  ],
  declarations: [Hal4Page]
})
export class Hal4PageModule {}
