import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/header/header.component';
import { RodapeComponent } from './componentes/footer/footer.component';
import { listarAlunosComponente } from './componentes/students/list-students/list-students.component';
import { EditStudentsComponent } from './componentes/students/edit-students/edit-students.component';
import { DeleteStudentsComponent } from './componentes/students/delete-students/delete-students.component';
import { CreateStudentsComponent } from './componentes/students/create-students/create-students.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        CabecalhoComponent,
        RodapeComponent,
        listarAlunosComponente,
        EditStudentsComponent,
        DeleteStudentsComponent,
        CreateStudentsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NgxMaskModule.forRoot(),
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
