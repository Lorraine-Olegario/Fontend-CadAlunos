import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-students',
  templateUrl: './delete-students.component.html',
  styleUrls: ['./delete-students.component.css']
})
export class DeleteStudentsComponent {
    student: Student = {
        id: 0,
        name: '',
        registration: '',
        cpf: '',
        date_birth: '',
        addresses: {
            zip_code: '',
            public_place: '',
            neighborhood: '',
            city: '',
            state: '',
            number: '',
            complement: ''
        }
    };

    constructor (
        private service: StudentService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.service.searchById(parseInt(id!)).subscribe((student) => {
            this.student = student
        });
    }

    excluirAluno() {
        if (this.student.id) {
            this.service.delete(this.student.id).subscribe(() => {
                this.router.navigate(['/listStudents']);
            });
        }
    }

    cancelar() {
        this.router.navigate(['/listStudents']);
    }
}
