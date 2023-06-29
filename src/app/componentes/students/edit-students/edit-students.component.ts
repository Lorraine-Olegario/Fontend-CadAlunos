import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrls: ['./edit-students.component.css']
})
export class EditStudentsComponent implements OnInit {

    formulario!: FormGroup;

    constructor(
        private service: StudentService,
        private router: Router,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.service.searchById(parseInt(id!)).subscribe((student) => {
            this.formulario = this.formBuilder.group({
                id: [student.id],
                name: [student.name, Validators.compose([
                    Validators.required,
                    Validators.minLength(3),
                    Validators.pattern(/(.|\s)*\S(.|\s)*/)
                ])],
                cpf: [student.cpf, Validators.compose([
                    Validators.required,
                    Validators.pattern(/(.|\s)*\S(.|\s)*/)
                ])],
                date_birth: [student.date_birth, Validators.compose([
                    Validators.required,
                    Validators.pattern(/(.|\s)*\S(.|\s)*/)
                ])],
                registration: [student.registration, Validators.compose([
                    Validators.required,
                    Validators.pattern(/(.|\s)*\S(.|\s)*/)
                ])],
                addresses: this.formBuilder.group({
                    idStudent: [student.id],
                    zip_code: [student.addresses.zip_code],
                    public_place: [student.addresses.public_place],
                    neighborhood: [student.addresses.neighborhood],
                    city: [student.addresses.city, Validators.compose([
                        Validators.required,
                        Validators.pattern(/(.|\s)*\S(.|\s)*/)
                    ])],
                    state: [student.addresses.state, Validators.compose([
                        Validators.required,
                        Validators.pattern(/(.|\s)*\S(.|\s)*/)
                    ])],
                    number: [student.addresses.number],
                    complement: [student.addresses.complement]
                })
            });
        });
    }

    editStudent() {
        this.service.update(this.formulario.value).subscribe(() => {
            this.router.navigate(['listStudents']);
        });
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
