import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-form',
  template: ` 

  <h2>Voiture</h2>
    <form [formGroup]="myCar" (ngSubmit)="handleSubmit()">
      <div class="form-group">
        <input
          formControlName="marque"
          type="text"
          class="form-control"  
          placeholder="marque de la voiture"
        />
       
       
      </div>

       <div class="form-group">
        <input
          formControlName="model"
          type="text"
          class="form-control"
          placeholder="Model"
        />
        
      </div>

       <div class="form-group">
        <input
          formControlName="age"
          type="text"
          class="form-control"
          placeholder="age de la tuture"
        />
       
      </div>

       <div class="form-group">
        <input
          formControlName="enVente"
          type="text"
          class="form-control"
          placeholder="Espece de l'arbre"
        />
        
      </div>

      <button type="submit" class="btn btn-primary">Enregistrer</button>

    </form>
  `,
  styles: []
})
export class CarFormComponent implements OnInit {


  myCar: FormGroup;
  
  car = {
    marque: "Peugeot",
    model: "1008",
    age: 5,
    enVente: true
  }; 

  
  constructor() { }

  ngOnInit() {

    this.initializeForm();
  }


  initializeForm() {
    // Ici on initialise le formulaire

    this.myCar = new FormGroup({ 
      marque: new FormControl(this.car && this.car.marque, Validators.required),
      model: new FormControl(this.car && this.car.model, Validators.required),
      age: new FormControl(this.car && this.car.age, Validators.required),
      enVente: new FormControl(this.car && this.car.enVente, Validators.required)
    })
  }

  handleSubmit()
  {
    console.log(this.myCar.value); 
  }
}
