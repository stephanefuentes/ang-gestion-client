import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients/clients.component';

import { FormsModule } from '@angular/forms';

import { UiModule } from '../ui/ui.module';
import { ClientFormComponent } from './client-form/client-form.component';
import { RouterModule } from '@angular/router';
// import { BadgeComponent } from './badge/badge.component';
// import { TableComponent } from './table/table.component';


 

@NgModule({
  declarations: [ClientsComponent, ClientFormComponent],
  imports: [
    CommonModule, UiModule, FormsModule, RouterModule   
  ],
  exports: [ClientsComponent, ClientFormComponent]// composant qui sera exporté
})
export class ClientsModule { }
