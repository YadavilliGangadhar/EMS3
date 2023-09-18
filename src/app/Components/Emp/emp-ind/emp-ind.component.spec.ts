import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpIndComponent } from './emp-ind.component';

describe('EmpIndComponent', () => {
  let component: EmpIndComponent;
  let fixture: ComponentFixture<EmpIndComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpIndComponent]
    });
    fixture = TestBed.createComponent(EmpIndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
