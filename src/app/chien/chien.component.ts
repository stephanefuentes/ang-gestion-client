import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChienService } from '../chien.service';
import { Chien } from '../chien';

@Component({
  selector: 'app-chien',
  template: `
    <h2>Ajout d'un toutou</h2>
    <form #toutou="ngForm" (ngSubmit)="dogSubmit(dog)">   
      <div class="form-group"><label>Nom de la bête :</label>
        <input
          type="text"
          class="form-control"
          name="name"
          placeholder="Nom du toutou"
          [ngModel]="chien?.name"
        />
      </div>
      <div class="form-group"><label>Race de la bête :</label> 
        <input 
          type="text"
          class="form-control"
          name="race"
          placeholder="Race du gentil toutou"
          [ngModel]="chien?.race"  
        />
      </div>
      <button type="submit" class="btn btn-primary">Enregistrer</button>
    </form>
  `,
  styles: []
})
export class ChienComponent implements OnInit {

  public chien: Chien;

  constructor(private serviceDog: ChienService,
              private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if(id !== "new")
    {
      this.chien = this.serviceDog.getChien(+id);
    }
  }

  dogSubmit(form: NgForm)
  {
    if(form.invalid)
      return;

      
  }

}
