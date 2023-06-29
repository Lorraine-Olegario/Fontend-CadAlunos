import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-students',
  templateUrl: './create-students.component.html',
  styleUrls: ['./create-students.component.css']
})
export class CreateStudentsComponent implements OnInit {

    formulario!: FormGroup;

    constructor(
        private service: StudentService,
        private router: Router,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.formulario = this.formBuilder.group({
            name: ['', Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.pattern(/(.|\s)*\S(.|\s)*/)
            ])],
            cpf: ['', Validators.compose([
                Validators.required,
                Validators.pattern(/(.|\s)*\S(.|\s)*/)
            ])],
            date_birth: ['', Validators.compose([
                Validators.required,
                Validators.pattern(/(.|\s)*\S(.|\s)*/),
            ])],
            registration: ['', Validators.compose([
                Validators.required,
                Validators.pattern(/(.|\s)*\S(.|\s)*/)
            ])],
            addresses: this.formBuilder.group({
                zip_code: [],
                public_place: [],
                neighborhood: [''],
                city: ['', Validators.compose([
                    Validators.required,
                    Validators.pattern(/(.|\s)*\S(.|\s)*/)
                ])],
                state: ['', Validators.compose([
                    Validators.required,
                    Validators.pattern(/(.|\s)*\S(.|\s)*/)
                ])],
                number: [],
                complement: []
            })
        });
    }

    createStudent() {
        if (this.formulario.valid) {
            this.service.create(this.formulario.value).subscribe(() => {
                this.router.navigate(['listStudents']);
            });
        }
    }

    cancel() {
        this.router.navigate(['listStudents']);
    }

    habilitarButton(): string {
        if (!this.formulario.valid) {
            return 'botao__desabilitado';
        }

        return 'botao';
    }
}
