import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpPutComponent } from './emp-put.component';

describe('EmpPutComponent', () => {
  let component: EmpPutComponent;
  let fixture: ComponentFixture<EmpPutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpPutComponent]
    });
    fixture = TestBed.createComponent(EmpPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
