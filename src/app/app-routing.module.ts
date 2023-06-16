import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAlunosComponent } from './componentes/alunos/listar-alunos/listar-alunos.component';
import { CriarAlunosComponent } from './componentes/alunos/criar-alunos/criar-alunos.component';
import { EditarAlunosComponent } from './componentes/alunos/editar-alunos/editar-alunos.component';
import { DeletarAlunosComponent } from './componentes/alunos/deletar-alunos/deletar-alunos.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'listarAlunos',
        pathMatch: 'full'
    },
    {
        path: 'listarAlunos',
        component: ListarAlunosComponent
    },
    {
        path: 'criarAluno',
        component: CriarAlunosComponent
    },
    {
        path: 'aluno/editarAluno/:id',
        component: EditarAlunosComponent
    },
    {
        path: 'aluno/deletarAluno/:id',
        component: DeletarAlunosComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
