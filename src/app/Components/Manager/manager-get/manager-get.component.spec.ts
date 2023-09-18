import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerGetComponent } from './manager-get.component';

describe('ManagerGetComponent', () => {
  let component: ManagerGetComponent;
  let fixture: ComponentFixture<ManagerGetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerGetComponent]
    });
    fixture = TestBed.createComponent(ManagerGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
