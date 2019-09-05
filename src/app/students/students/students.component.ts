import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  template: `
    <h2>Listes de étudiants</h2>
    <table class="table tbale-hover">
    <thead>
      <th>Avatar</th>
      <th>Name</th>
      <th>Age</th>
      <th>Financement</th>
      <th></th>
    </thead>
    <tbody>
      <tr *ngFor="let student of students"> 
        <td><img src="{{ student.avatar }}"/></td>
        <td>{{ student.firstName}} {{ student.lastName }}</td> 
        <td>{{ student.age }} ans</td>
        <td>{{ student.funded }}</td>
        <td><a routerLink="/students/{{ student.id }}" class="btn btn-primary">Editer</a>
            <a class="btn btn-danger">Supprimer</a></td> 
      </tr>
    </tbody>
    
    </table>
  `,
  styles: []
})
export class StudentsComponent implements OnInit {

  public students: Student[] = [];

  constructor(private service: StudentsService) { }

  ngOnInit() {
  this.service.getStudents().subscribe(listeStudent => this.students = listeStudent);
  }

}
