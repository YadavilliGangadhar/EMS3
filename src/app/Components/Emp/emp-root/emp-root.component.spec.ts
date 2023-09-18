import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpRootComponent } from './emp-root.component';

describe('EmpRootComponent', () => {
  let component: EmpRootComponent;
  let fixture: ComponentFixture<EmpRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpRootComponent]
    });
    fixture = TestBed.createComponent(EmpRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
