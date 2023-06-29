import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Student } from './student';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class StudentService {

    private readonly API = 'http://localhost:3003/students';

    constructor(private http: HttpClient) { }

    list(filtro: string): Observable<Student[]> {

        let params = new HttpParams();
        if (filtro.trim().length > 2) {
            params = params.set('q', filtro);
        }

        return this.http.get<Student[]>(this.API, { params });
    }

    create(student: Student): Observable<Student> {
        return this.http.post<Student>(this.API, student);
    }

    searchById(id: number): Observable<Student> {
        const url = `${this.API}/${id}`;
        return this.http.get<Student>(url);
    }

    update(student: Student): Observable<Student> {
        console.log(student);

        const url = `${this.API}/${student.id}`;
        return this.http.put<Student>(url, student);
    }

    delete(id: Number): Observable<Student> {
        const url = `${this.API}/${id}`;
        return this.http.delete<Student>(url);
    }
}
