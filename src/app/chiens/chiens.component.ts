import { Component, OnInit } from '@angular/core';
import { ChienService } from '../chien.service';
import { Chien } from '../chien';

@Component({
  selector: 'app-chiens',
  template: `
  <h2>Liste des toutous</h2>
  <br />
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Race</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let chien of chiens">
          <td>{{chien.id}}</td>
          <td><a routerLink="/chien/{{ chien.id }}">{{chien.name}}</a></td>
          <td>{{chien.race}}</td>
          <td><button class="btn btn-warning"></button></td>
        </tr>
        
      </tbody>

    
    </table>
    
    


  `,
  styles: []
})
export class ChiensComponent implements OnInit {

  chiens: Chien[] = []; 

  constructor(private serviceDog: ChienService) { }

  ngOnInit() {
    this.chiens = this.serviceDog.getChiens();
  }

}
