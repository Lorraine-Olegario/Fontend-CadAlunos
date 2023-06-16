import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLetaralComponent } from './menu-letaral.component';

describe('MenuLetaralComponent', () => {
  let component: MenuLetaralComponent;
  let fixture: ComponentFixture<MenuLetaralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuLetaralComponent]
    });
    fixture = TestBed.createComponent(MenuLetaralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
