import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChiensComponent } from '../chiens/chiens.component';
import { ChienComponent } from './chien.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ChiensComponent, ChienComponent],
  imports: [
    CommonModule, RouterModule, FormsModule
  ]
})
export class ChienModule { }
