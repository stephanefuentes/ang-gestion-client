import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { StudentsService } from '../students.service';
import { Student } from '../student';

@Component({
  selector: 'app-student',
  template: `
   <h2>Création dun student</h2>
    <form #listStudent="ngForm" (ngSubmit)="mySubmit(listStudent)">  
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          name="firsName"
          placeholder="firsName"
          [ngModel] = "student?.firstName"
          
        />
      </div>
      <div class="form-group">
        <input 
          type="text"
          class="form-control"
          name="lastName"
          placeholder="lastName"
          [ngModel] = "student?.lastName"
         
        />
      </div>

       <div class="form-group">
        <input
          type="text"
          class="form-control"
          name="age"
          placeholder="age"
          [ngModel] = "student?.age"
          
        />
      </div>
      <div class="form-group">
        <input 
          type="text"
          class="form-control"
          name="avatar"
          placeholder="avatar"
          [ngModel] = "student?.avatar"
         
        />
      </div>

      <div class="form-group">
        <input 
          type="text"
          class="form-control"
          name="funded"
          placeholder="funded" 
          [ngModel] = "student?.funded"
         
        />
      </div>

      <button type="submit" class="btn btn-primary">Enregistrer</button>
    </form>
  `,
  styles: []
})
export class StudentComponent implements OnInit {

  student: Student;

  constructor(private service: StudentsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");

    if (id !== "new") {
       this.service.getStudent(+id).subscribe( myStudent => this.student = myStudent);
      
    }
  }


  mySubmit(form: NgForm)
  {
    if (form.invalid)
      return;

    if (this.student) {
      this.service.updateStudent({ ...this.student, ...form.value })
        .subscribe(resultat => {
          this.router.navigateByUrl("/students"); 
        }),
        error => {
          console.log(error); 
        }
    }
    else {
      //this.service.createStudent(form.value);

      // .subscribe(() => {
      //   this.router.navigateByUrl("/students");
      // },
      //   error => {
      //     console.log(error);
      //   }
      // );
    }

    // this.router.navigateByUrl("/students"); 
  

  }

}
