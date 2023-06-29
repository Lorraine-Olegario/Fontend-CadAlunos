import { Component, Input } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-list-students',
    templateUrl: './list-students.component.html',
    styleUrls: ['./list-students.component.css']
})

export class listarAlunosComponente {
    listStudents: Student[] = [];
    filtro: string = '';

    constructor(
        private service: StudentService,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.service.list(this.filtro)
            .subscribe((listStudents) => {
                this.listStudents = listStudents
            });
    }

    searchStudents() {
        this.service.list(this.filtro)
            .subscribe((listStudents) => {
                this.listStudents = listStudents
            });
    }
}
