import { ComponentFixture, TestBed } from '@angular/core/testing';

import { listarAlunosComponente } from './list-students.component';

describe('listarAlunosComponente', () => {
  let component: listarAlunosComponente;
  let fixture: ComponentFixture<listarAlunosComponente>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [listarAlunosComponente]
    });
    fixture = TestBed.createComponent(listarAlunosComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
