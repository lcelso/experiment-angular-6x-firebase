import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncluirComponent } from './incluir.component';

const routes: Routes = [
  {
    path: '', component: IncluirComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageIncluirRoutingModule {}
