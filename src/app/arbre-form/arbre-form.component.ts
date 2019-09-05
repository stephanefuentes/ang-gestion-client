import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "app-arbre-form",
  template: `
    <!--
    1) Les réactive forms sont gérés, créés à partir de la classe TS
    2) Il faut faire le lien entre les éléments HTML et les éléments du form
    3) Pour lier un formulaire entier, on utilise la directive [formGroup]
    4) Pour lier un input à un formControl on utilise la directive formControlName
    5) On peut imbriquer des groupes les uns dans les autres afin de modeler
    la forme de l'objet final
    -->

    {{ bite.value | json }}

    <form [formGroup]="bite" (ngSubmit)="handleSubmit()">
      <div class="form-group">
        <input
          formControlName="espece"
          type="text"
          class="form-control"
          placeholder="Espece de l'arbre"
        />
        <p *ngIf="hasError('espece', 'required')">
          L'espèce est obligatoire
        </p>
        <p *ngIf="hasError('espece', 'minlength')">
          L'espèce doit avoir
          {{ getError("espece", "minlength").requiredLength }}
          caractères au minimum
        </p>
      </div>

      <div formGroupName="details">
        <div class="form-group">
          <input
            formControlName="age"
            type="number"
            class="form-control"
            placeholder="Age de l'arbre"
          />
        </div>

        <div class="form-group">
          <input
            formControlName="taille"
            type="number"
            class="form-control"
            placeholder="Taille de l'arbre"
          />
        </div>
      </div>

      <h3>Donateurs de l'arbre</h3>

      <div formArrayName="donateurs">
        <div
          class="row"
          *ngFor="let donateur of bite.get('donateurs').controls; index as i"
          [formGroupName]="i"
        >
          <div class="col-5">
            <input
              type="text"
              formControlName="prenom"
              placeholder="Prénom du donateur"
              class="form-control"
            />
          </div>
          <div class="col-5">
            <input
              type="text"
              formControlName="nom"
              placeholder="Nom du donateur"
              class="form-control"
            />
          </div>
          <div class="col">
            <button class="btn btn-danger" (click)="handleDelete(i)">X</button>
          </div>
        </div>
      </div>

      <div class="mt-3">
        <button class="btn btn-success" (click)="addDonateur()">Ajouter un donateur</button>
      </div>

      <hr />

      <button type="submit" class="btn btn-primary">Enregistrer</button>
    </form>
  `,
  styles: []
})
export class ArbreFormComponent implements OnInit {

  //  ... c'est un retour d'une requette htt
          // arbre = {
          //   espece: "Cèdre",
          //   details: {
          //     age: 10,
          //     taille: 3
          //   },
          //   donateurs: [
          //     { prenom: "Djamel", nom: "Ait Ammar" },
          //     { prenom: "Joseph", nom: "Durand" }
          //   ]
          // };
arbre;

bite: FormGroup;

  initializeForm() {
    this.bite = new FormGroup({
                                //  si this.arbre = false -> stop .. sinon on passe à this.arbre.espece
      espece: new FormControl(this.arbre && this.arbre.espece, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(40)
      ]),
      details: new FormGroup({
        age: new FormControl(this.arbre && this.arbre.details.age, Validators.required),
        taille: new FormControl(this.arbre && this.arbre.details.taille, Validators.required)
      }),
      donateurs: new FormArray([])
    });

      if(this.arbre)
      {

        for (let donateur of this.arbre.donateurs) {
          const tableau = this.bite.get("donateurs") as FormArray;

          tableau.push(
            new FormGroup({
              prenom: new FormControl(donateur.prenom),
              nom: new FormControl(donateur.nom)
            })
          );
        }

      }
  }


  // bite = new FormGroup({
  //   espece: new FormControl("Cèdre", [
  //     Validators.required,
  //     Validators.minLength(4),
  //     Validators.maxLength(40)
  //   ]),
  //   details: new FormGroup({
  //     age: new FormControl(32, Validators.required),
  //     taille: new FormControl(10, Validators.required)
  //   }),
  //   donateurs: new FormArray([])
  // });


  addDonateur() {
    const tableau = this.bite.get("donateurs") as FormArray;

    tableau.push(
      new FormGroup({
        prenom: new FormControl(),
        nom: new FormControl()
      })
    );
  }

  handleDelete(index: number) {
    const tableau = this.bite.get("donateurs") as FormArray;
    tableau.removeAt(index);
  }

  constructor() { }

  ngOnInit() {

    this.initializeForm();

   }

  handleSubmit() {
    console.log(this.bite.value);
  }

  hasError(fieldName: string, errorName: string) {
    return (
      this.bite.get(fieldName).hasError(errorName) &&
      this.bite.get(fieldName).dirty
    );
  }

  getError(fieldName: string, errorName: string) {
    return this.bite.get(fieldName).getError(errorName);
  }
}
