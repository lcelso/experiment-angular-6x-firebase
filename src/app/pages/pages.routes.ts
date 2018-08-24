import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

export const routes: Routes = [
  {
    path: 'cadastros', component: PagesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      },
      {
        path: 'login',
        loadChildren: './login/login.module#PageLoginModule',
      },
      {
        path: 'lista',
        loadChildren: './lista/lista.module#PageListaModule',
      },
      {
        path: 'incluir',
        loadChildren: './incluir/incluir.module#PageIncluirModule',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
