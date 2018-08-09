// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages.routes';

@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    // BrowserModule,
    PagesRoutingModule,
    SharedModule,
  ],
  bootstrap: [PagesComponent]
})
export class PagesModule {}
