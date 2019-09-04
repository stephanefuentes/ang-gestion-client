import { Injectable } from '@angular/core';
import { Chaise } from './chaise';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChaisesService {

  chaises: Chaise[] = [
    { id: 1, name: "Chaise en bois", price: 10 },
    { id: 2, name: "Chaise en fer", price: 30 },
    { id: 3, name: "Chaise en plastique", price: 5 }
  ];


  constructor(private http: HttpClient) { }

  getChaises(): Observable<Chaise[]>
  {
    // return of(this.chaises.slice());
    return this.http.get<Chaise[]>(
      "http://5a5a9e00bc6e340012a03796.mockapi.io/chaises"
    );
  }


  getChaise(id: number) : Observable<Chaise>
  {
    // const chaise = this.chaises.find(chaise => chaise.id === id);
    // return of({ ...chaise }); // copie de chaise
    return this.http.get<Chaise>(
      "http://5a5a9e00bc6e340012a03796.mockapi.io/chaises" +"/" + id

    );
  }

  createChaise(chaise: Chaise)
  {
    // chaise.id = new Date().getTime();
    // this.chaises.push(chaise);

    // return of(true);
    this.http.post<Chaise>("http://5a5a9e00bc6e340012a03796.mockapi.io/chaises", chaise
     
    );


  }

  updateChaise(chaise: Chaise): Observable<Chaise> {
    // const index = this.chaises.findIndex(c => c.id === chaise.id);
    // if (index > -1) {
    //   this.chaises[index] = chaise;
    //   return of(true);
    // }

    // return throwError('un probleme a eu lier lors de la requette http');

    return this.http.put<Chaise>(
      "http://5a5a9e00bc6e340012a03796.mockapi.io/chaises" + "/" + chaise.id,
      chaise
      );

  }

  deleteChaise(id: number) : Observable<Chaise>
  {
    // const index = this.chaises.findIndex(chaise => chaise.id === id);

    // if (index > -1) {
    //   this.chaises.splice(index, 1);
    //   return of(true);
    // }

    // return of(false);

    return this.http.delete<Chaise>("http://5a5a9e00bc6e340012a03796.mockapi.io/chaises" + "/" + id);
  }

}
