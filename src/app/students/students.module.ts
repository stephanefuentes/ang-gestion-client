import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './student/student.component';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardDetailsComponent } from './dashboard-details/dashboard-details.component';
import { DashboardDetailsEditComponent } from './dashboard-details-edit/dashboard-details-edit.component';




@NgModule({
  declarations: [StudentsComponent, StudentComponent, DashboardComponent, DashboardDetailsComponent, DashboardDetailsEditComponent],
  imports: [
    CommonModule, RouterModule, FormsModule, ReactiveFormsModule
  ]
})
export class StudentsModule { }
