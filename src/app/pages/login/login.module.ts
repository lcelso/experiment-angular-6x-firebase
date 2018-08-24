import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { PageLoginRoutingModule } from './login.routes';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
      CommonModule,
      PageLoginRoutingModule,
      SharedModule,
    ],
    declarations: [
        LoginComponent,
    ],
    exports: [
        LoginComponent,
    ]
})
export class PageLoginModule {}
