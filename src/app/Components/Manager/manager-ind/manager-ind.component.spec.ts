import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerIndComponent } from './manager-ind.component';

describe('ManagerIndComponent', () => {
  let component: ManagerIndComponent;
  let fixture: ComponentFixture<ManagerIndComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerIndComponent]
    });
    fixture = TestBed.createComponent(ManagerIndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
