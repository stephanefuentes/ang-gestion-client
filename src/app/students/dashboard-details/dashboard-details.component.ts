import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';

import { map, switchMap } from "rxjs/operators";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-details',
  template: `
     <div class="card border-light p-5">
      <h2>{{ student?.firstName }} {{ student?.lastName }}</h2>
      <p><strong>Financement : </strong> {{ student?.funded }}</p>
      <p><strong>Age : </strong> {{ student?.age }} ans</p>
      <hr />
      <a
     
        routerLink="/dashboard/{{ student?.id }}/edit"
        class="btn btn-primary float-right"
        >Modifier</a
      >
    </div>
  `,
  styles: []
})
export class DashboardDetailsComponent implements OnInit {

student: Student;
  studentSubscription: Subscription;


  constructor(private service: StudentsService,
               private route: ActivatedRoute) { }

  ngOnInit() {
    // 1. Extraire l'identifiant
        //const id = +this.route.snapshot.paramMap.get("id");

        // 1) On veut réagir aux changements des paramètres dans l'URL
    // => On reçoit les paramètres lorsqu'ils changent
// this.route.paramMap.subscribe(params => {

      // 2) On demande le paramètre "id" sous la forme d'un nombre
      // (c'est l'identifiant du student)
//const id = +params.get("id");

      // 3) On va chercher le student qui correspond à l'id et on réagit
      // lorsqu'on reçoit les données du serveur
//   this.service.getStudent(id).subscribe(student => (this.student = student));
// });


//RMQ : LA BONE PRATIQUE DIT DE NE PAS FAIRE DE SUBSCRIPTION DANS UNE AUTRE SUBSCRIPTION, D'OU LE CODE SI DESSOUS
    this.route.paramMap
      .pipe(
        map(params => +params.get("id")),
        switchMap(id => this.service.getStudent(id))
      )
      .subscribe(student => (this.student = student));
  }

    
  ngOnDestroy() {
    this.studentSubscription.unsubscribe();
  }


  // RMQ : va partir de l'adresse actuelle est rajouter /edit/toto/student.firstName
   // [routerLink]="['edit', 'toto', student.firstName]"

}
