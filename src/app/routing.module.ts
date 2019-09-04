import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients/clients.component';
import { ClientFormComponent } from './clients/client-form/client-form.component';
import { ClientsModule } from './clients/clients.module';
import { ChaisesComponent } from './chaises/chaises/chaises.component';
import { ChaiseFormComponent } from './chaise-form/chaise-form.component';
import { ChiensComponent } from './chiens/chiens.component';
import { ChienComponent } from './chien/chien.component';

const routes: Routes = [
  { path: "clients", component: ClientsComponent },
  { path: "clients/:id", component: ClientFormComponent },
  
  { path: "chaises", component: ChaisesComponent },
  { path: "chaises/:id", component: ChaiseFormComponent },

  { path: "chiens", component: ChiensComponent },
  { path: "chien/:id", component: ChienComponent },

  { path: "", redirectTo: "/client", pathMatch: "full" }
];

@NgModule({ 
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes), ClientsModule 
  ],
  exports: [RouterModule, ClientsModule] // export du Router module configurer
})
export class RoutingModule { }
