import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../students.service';
import { Student } from '../student';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard-details-edit',
  template: `
    <h3>Modification d'un étudiant</h3>
    <form [formGroup]="form" (ngSubmit)="handleSubmit()">
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Prénom de l'étudiant"
          formControlName="firstName"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Nom de famille de l'étudiant"
          formControlName="lastName"
        />
      </div>
      <div class="form-group">
        <input
          type="number"
          class="form-control"
          placeholder="Âge de l'étudiant"
          formControlName="age"
        />
      </div>
      <div class="form-group">
        <input
          type="url"
          class="form-control"
          placeholder="URL de l'avatar"
          formControlName="avatar"
        />
      </div>
      <div class="form-group">
        <label>
          <input type="checkbox" formControlName="funded" /> Financement par
          organisme
        </label>
      </div>

      <button type="submit" class="btn btn-success float-right">
        Enregistrer !
      </button>
    </form>

     {{ form.value | json }}
     <hr/>
     {{ student | json }}

  `,
  styles: []
})
export class DashboardDetailsEditComponent implements OnInit {

  student: Student;

form: FormGroup;

  constructor(private service: StudentsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // 1. Extraire l'identifiant
    //const id = +this.route.snapshot.paramMap.get("id");

    // 1) On veut réagir aux changements des paramètres dans l'URL
    // => On reçoit les paramètres lorsqu'ils changent
    this.route.paramMap.subscribe(params => {

      const id = +params.get("id");

      this.service.getStudent(id).subscribe(student => {
        this.student = student;
        this.initializeForm();

      });
    });

    // 2. Appeler le service et mettre en place le student
    //this.service.getStudent(id).subscribe(student => (this.student = student));

    this.initializeForm();
  }

  initializeForm() {
    this.form = new FormGroup({
      firstName: new FormControl(this.student && this.student.firstName),
      lastName: new FormControl(this.student && this.student.lastName),
      age: new FormControl(this.student && this.student.age),
      avatar: new FormControl(this.student && this.student.avatar),
      funded: new FormControl(this.student && this.student.funded)
    });
  }

  handleSubmit()
  {
    if(this.form.invalid) return;

    const student = { ...this.student, ...this.form.value };

    this.service.updateStudent(student).subscribe(() => {

      // RMQ : la fonction next commande l'emission d'un evénement
        this.service.dataChanged.next();
        this.router.navigateByUrl("/dashboard/" + student.id);

    })



  }


}
