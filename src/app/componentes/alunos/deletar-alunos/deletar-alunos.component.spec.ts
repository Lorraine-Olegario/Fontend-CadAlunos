import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarAlunosComponent } from './deletar-alunos.component';

describe('DeletarAlunosComponent', () => {
  let component: DeletarAlunosComponent;
  let fixture: ComponentFixture<DeletarAlunosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletarAlunosComponent]
    });
    fixture = TestBed.createComponent(DeletarAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
