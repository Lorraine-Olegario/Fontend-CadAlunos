import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { listarAlunosComponente } from './componentes/students/list-students/list-students.component';
import { CreateStudentsComponent } from './componentes/students/create-students/create-students.component';
import { EditStudentsComponent } from './componentes/students/edit-students/edit-students.component';
import { DeleteStudentsComponent } from './componentes/students/delete-students/delete-students.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'listStudents',
        pathMatch: 'full'
    },
    {
        path: 'listStudents',
        component: listarAlunosComponente
    },
    {
        path: 'createStudents',
        component: CreateStudentsComponent
    },
    {
        path: 'student/editStudents/:id',
        component: EditStudentsComponent
    },
    {
        path: 'student/deleteStudents/:id',
        component: DeleteStudentsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
