import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IncluirComponent } from './incluir.component';
import { PageIncluirRoutingModule } from './incluir.routes';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
      CommonModule,
      PageIncluirRoutingModule,
      SharedModule,
      FormsModule,
    ],
    declarations: [
        IncluirComponent,
    ],
    exports: [
        IncluirComponent,
    ]
})
export class PageIncluirModule {}
