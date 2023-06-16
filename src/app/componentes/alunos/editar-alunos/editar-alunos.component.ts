import { Component } from '@angular/core';
import { Aluno } from '../aluno';
import { AlunoService } from '../aluno.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-alunos',
  templateUrl: './editar-alunos.component.html',
  styleUrls: ['./editar-alunos.component.css']
})
export class EditarAlunosComponent {
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
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id')
        this.service.buscarPorId(parseInt(id!)).subscribe((aluno) => {
            this.aluno = aluno
        });
    }

    editarAuno() {
        this.service.editar(this.aluno).subscribe(() => {
            this.router.navigate(['listarAlunos']);
        })
    }

    cancelar() {
        this.router.navigate(['listarAlunos']);
    }
}
