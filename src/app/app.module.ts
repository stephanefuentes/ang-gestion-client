import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientsModule } from './clients/clients.module';

import { RoutingModule } from './routing.module';


import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
