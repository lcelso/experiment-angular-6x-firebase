import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    CommonModule
  ],
  providers: [  ],
  declarations: [
    HomeComponent,
  ],
})
export class HomeModule { }
