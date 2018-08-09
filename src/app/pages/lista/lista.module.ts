import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaComponent } from './lista.component';
import { PageListaRoutingModule } from './lista.routes';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
      CommonModule,
      PageListaRoutingModule,
      SharedModule,
    ],
    declarations: [
        ListaComponent,
    ],
    exports: [
        ListaComponent,
    ]
})
export class PageListaModule {}
