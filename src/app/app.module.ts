import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OnpremComponent } from './onprem/onprem.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.router.module';
import { DDatatableModule } from 'd-datatable';

@NgModule({
  declarations: [
    AppComponent,
    OnpremComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
