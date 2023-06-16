import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { ListarAlunosComponent } from './componentes/alunos/listar-alunos/listar-alunos.component';
import { EditarAlunosComponent } from './componentes/alunos/editar-alunos/editar-alunos.component';
import { DeletarAlunosComponent } from './componentes/alunos/deletar-alunos/deletar-alunos.component';
import { CriarAlunosComponent } from './componentes/alunos/criar-alunos/criar-alunos.component';
import { FormsModule } from '@angular/forms';
import { AlunoComponent } from './componentes/alunos/aluno/aluno.component';
import { MenuLetaralComponent } from './componentes/menu-letaral/menu-letaral.component';


@NgModule({
    declarations: [
        AppComponent,
        CabecalhoComponent,
        RodapeComponent,
        ListarAlunosComponent,
        EditarAlunosComponent,
        DeletarAlunosComponent,
        CriarAlunosComponent,
        AlunoComponent,
        MenuLetaralComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NgxMaskModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
