import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIndComponent } from './admin-ind.component';

describe('AdminIndComponent', () => {
  let component: AdminIndComponent;
  let fixture: ComponentFixture<AdminIndComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminIndComponent]
    });
    fixture = TestBed.createComponent(AdminIndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
