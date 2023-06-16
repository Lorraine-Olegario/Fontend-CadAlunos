import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Aluno } from './aluno';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})


export class AlunoService {

    // private readonly API = 'http://localhost:3000/alunos';
    private readonly API = 'http://localhost:3003/alunos';

    constructor(private http: HttpClient) { }

    listar(filtro: string): Observable<Aluno[]> {

        let params = new HttpParams();
        if (filtro.trim().length > 2) {
            params = params.set('q', filtro);
        }

        return this.http.get<Aluno[]>(this.API, { params });
    }

    criar(aluno: Aluno): Observable<Aluno> {
        console.log(aluno);
        return this.http.post<Aluno>(this.API, aluno);
    }

    buscarPorId(id: number): Observable<Aluno> {
        const url = `${this.API}/${id}`;
        return this.http.get<Aluno>(url);
    }

    editar(aluno: Aluno): Observable<Aluno> {
        const url = `${this.API}/${aluno.id}`;
        return this.http.put<Aluno>(url, aluno);
    }

    deletar(id: Number): Observable<Aluno> {
        const url = `${this.API}/${id}`;
        return this.http.delete<Aluno>(url);
    }
}
