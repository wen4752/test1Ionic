import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hal4Page } from './hal4.page';

const routes: Routes = [
  {
    path: '',
    component: Hal4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hal4PageRoutingModule {}
