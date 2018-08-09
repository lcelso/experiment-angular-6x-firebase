import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncluirComponent } from './incluir.component';
import { PageIncluirRoutingModule } from './incluir.routes';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
      CommonModule,
      PageIncluirRoutingModule,
      SharedModule,
    ],
    declarations: [
        IncluirComponent,
    ],
    exports: [
        IncluirComponent,
    ]
})
export class PageIncluirModule {}
