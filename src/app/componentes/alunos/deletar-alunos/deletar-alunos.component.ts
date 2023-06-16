import { Component } from '@angular/core';
import { Aluno } from '../aluno';
import { AlunoService } from '../aluno.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deletar-alunos',
  templateUrl: './deletar-alunos.component.html',
  styleUrls: ['./deletar-alunos.component.css']
})
export class DeletarAlunosComponent {
    aluno: Aluno = {
        id: 0,
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
    };

    constructor (
        private service: AlunoService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.service.buscarPorId(parseInt(id!)).subscribe((aluno) => {
            this.aluno = aluno
        });
    }

    excluirAluno() {
        if (this.aluno.id) {
            this.service.deletar(this.aluno.id).subscribe(() => {
                this.router.navigate(['/listarAlunos']);
            });
        }
    }

    cancelar() {
        this.router.navigate(['/listarAlunos']);
    }
}
