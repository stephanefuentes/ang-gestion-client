import { Injectable } from '@angular/core';
import { Chien } from './chien';

@Injectable({
  providedIn: 'root'
})
export class ChienService {

  chiens: Chien[] =
  [
    {
      id: 1,
    name: "le beau coco",
    race: "chacal"
    },
    {
      id: 2,
      name: "le croquant",
      race: "chocho"
    },
    {
      id: 3,
      name: "tartelette",
      race: "bourinos"
    }

  ];

  constructor() { }


  getChiens(): Chien[]
  {
    return this.chiens.slice();
  }

  getChien(id: number)
  {
    return this.chiens.find(dog => dog.id === id );
  }

}
