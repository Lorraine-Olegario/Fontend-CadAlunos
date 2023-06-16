import { Component, Input, OnInit } from '@angular/core';
import { Aluno } from '../aluno';
import { AlunoService } from '../aluno.service';
import { Router } from '@angular/router';
import { ListarAlunosComponent } from '../listar-alunos/listar-alunos.component';
import { PesquisaService } from '../pesquisa.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent {
    // @Input() aluno: Aluno = {
    //     id: 1,
    //     matricula: "210300002s",
    //     cpf: "210300002s",
    //     nome: "Lorraine Olegario de Souza Silva",
    //     data__nasc: "17-02-2001",
    //     endereco: {
    //         logradouro: "string",
    //         bairro: "string",
    //         cidade: "string",
    //         estado: "string",
    //         numero: "string",
    //         complemento: "string"
    //     }
    // }

    listarAlunos: Aluno[] = [];
    filtro: string = '';

    constructor(
        private service: AlunoService,
        private router: Router,
        private listarAlunosComponente: ListarAlunosComponent,
        private pesquisaService: PesquisaService
    ) { }

    //todo logica executada assim que carregar o componente
    ngOnInit(): void {
        this.service.listar(this.filtro).subscribe((listarAlunos) => {
            this.listarAlunos = listarAlunos
        });

        // this.listarAlunosComponente.pesquisarAlunos(

            // this.service.listar(this.filtro)
            //     .subscribe((listagemAlunos) => {
            //         this.aluno = listagemAlunos
            // });
        // );
    }
}
