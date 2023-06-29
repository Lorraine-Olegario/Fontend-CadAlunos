import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStudentsComponent } from './delete-students.component';

describe('DeleteStudentsComponent', () => {
  let component: DeleteStudentsComponent;
  let fixture: ComponentFixture<DeleteStudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteStudentsComponent]
    });
    fixture = TestBed.createComponent(DeleteStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
