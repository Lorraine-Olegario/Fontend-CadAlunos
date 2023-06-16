import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PesquisaService {

    termoPesquisa: Subject<string> = new Subject<string>();
    constructor() { }

    atualizarTermoPesquisa(termo: string) {
        this.termoPesquisa.next(termo);
    }
}
