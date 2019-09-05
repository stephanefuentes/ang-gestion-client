import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './student/student.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [StudentsComponent, StudentComponent],
  imports: [
    CommonModule, RouterModule, FormsModule
  ]
})
export class StudentsModule { }
