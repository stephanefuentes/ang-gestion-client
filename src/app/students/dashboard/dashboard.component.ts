import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { Student } from '../student';

@Component({
  selector: 'app-dashboard',
  template: `
     <h2>Dashboard des étudiants</h2>
    <div class="row">
      <div class="col-4">
        <ul class="list-group">
          <a
            routerLink="/dashboard/{{ s.id }}"
            class="list-group-item"
            *ngFor="let s of students"
          >
            {{ s.firstName }} {{ s.lastName }}
          </a>
        </ul>
      </div>
      <div class="col-8">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: []
})
export class DashboardComponent implements OnInit {

students: Student[] =[];

  constructor(private service: StudentsService) { }

  ngOnInit() {

    this.service.getStudents().subscribe(students => (this.students = students));

    this.service.dataChanged.subscribe(() => {
      this.service.getStudents().subscribe(students => (this.students = students));
    });  


  }

  private loadStudents() {
    this.service
      .getStudents()
      .subscribe(students => (this.students = students));
  }

}
