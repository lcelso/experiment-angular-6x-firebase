import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { segmentReducer } from './state-management/reducers/segment.reducer';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app.routes';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    StoreModule.forRoot({
      segmentReducer: segmentReducer
    }),
    StoreDevtoolsModule.instrument(),
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    PagesModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
