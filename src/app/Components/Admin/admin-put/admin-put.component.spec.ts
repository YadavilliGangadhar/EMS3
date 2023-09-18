import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPutComponent } from './admin-put.component';

describe('AdminPutComponent', () => {
  let component: AdminPutComponent;
  let fixture: ComponentFixture<AdminPutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPutComponent]
    });
    fixture = TestBed.createComponent(AdminPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
