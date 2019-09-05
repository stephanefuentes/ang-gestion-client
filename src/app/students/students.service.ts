import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {



  constructor(private http: HttpClient) { }





  getStudents(): Observable<Student[]>
    {
      // return of(this.chaises.slice());
      return this.http.get<Student[]>( 
        "http://5d70b592d3448a001411ac77.mockapi.io/api/students"
      );
    }

    getStudent(id: number): Observable<Student>
    {
      return this.http.get<Student>('http://5d70b592d3448a001411ac77.mockapi.io/api/students' +'/'+ id);
    }


    updateStudent(student: Student): Observable<Student>
    {
      return this.http.put<Student>('http://5d70b592d3448a001411ac77.mockapi.io/api/students' + '/' + student.id, student); 
    }

}





