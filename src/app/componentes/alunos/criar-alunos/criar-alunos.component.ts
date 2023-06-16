import { Component } from '@angular/core';
import { AlunoService } from '../aluno.service';
import { Router } from '@angular/router';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-criar-alunos',
  templateUrl: './criar-alunos.component.html',
  styleUrls: ['./criar-alunos.component.css']
})
export class CriarAlunosComponent {
    aluno: Aluno = {
        nome: '',
        matricula: '',
        cpf: '',
        data__nasc: '',
        enderecos: {
            cep: '',
            logradouro: '',
            bairro: '',
            cidade: '',
            estado: '',
            numero: '',
            complemento: ''
          }
    }

    constructor(
        private service: AlunoService,
        private router: Router
    ) { }

    ngOnInit(): void {

    }

    criarAuno() {
        this.service.criar(this.aluno).subscribe(() => {
            this.router.navigate(['listarAlunos']);
        })
    }

    cancelar() {
        this.router.navigate(['listarAlunos']);
    }
}
