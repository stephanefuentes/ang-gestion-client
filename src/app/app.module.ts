import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientsModule } from './clients/clients.module';

import { RoutingModule } from './routing.module';

import { HttpClientModule } from '@angular/common/http'; 


import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ChaisesComponent } from './chaises/chaises/chaises.component';
import { ChaiseFormComponent } from './chaise-form/chaise-form.component';
import { FormsModule } from '@angular/forms';
import { ChienModule } from './chien/chien.module';
import { StudentsModule } from './students/students.module';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    ChaisesComponent,
    ChaiseFormComponent 
  ],
  imports: [
    BrowserModule, RoutingModule, FormsModule, ChienModule, HttpClientModule, StudentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
