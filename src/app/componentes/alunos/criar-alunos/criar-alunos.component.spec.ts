import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAlunosComponent } from './criar-alunos.component';

describe('CriarAlunosComponent', () => {
  let component: CriarAlunosComponent;
  let fixture: ComponentFixture<CriarAlunosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarAlunosComponent]
    });
    fixture = TestBed.createComponent(CriarAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
