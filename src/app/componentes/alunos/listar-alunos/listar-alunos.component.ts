import { Component, Input } from '@angular/core';
import { Aluno } from '../aluno';
import { AlunoService } from '../aluno.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-listar-alunos',
    templateUrl: './listar-alunos.component.html',
    styleUrls: ['./listar-alunos.component.css']
})

export class ListarAlunosComponent {
    @Input() aluno: Aluno = {
        id: 1,
        matricula: "210300002",
        cpf: "192.168.155-20",
        nome: "Lorraine Olegario de Souza Silva",
        data__nasc: "17-02-2001",
        enderecos: {
            cep: '35179000',
            logradouro: "string",
            bairro: "string",
            cidade: "string",
            estado: "string",
            numero: "string",
            complemento: "string"
        }
    }

    // listarAlunos: Aluno[] = [];
    filtro: string = '';

    constructor(
        private service: AlunoService,
        private router: Router,
    ) { }

    // atualizarPesquisa(termo: string) {
    //     this.pesquisaService.atualizarTermoPesquisa(termo);
    // }

    //todo logica executada assim que carregar o componente
    ngOnInit(): void {
        // this.service.listar(this.filtro)
        //     .subscribe((listagemAlunos) => {
        //         this.listarAlunos = listagemAlunos
        //     });
    }

    pesquisarAlunos() {
        // this.service.listar(this.filtro)
        //     .subscribe((listagemAlunos) => {
        //         this.aluno = listagemAlunos
        //     });
    }
}
