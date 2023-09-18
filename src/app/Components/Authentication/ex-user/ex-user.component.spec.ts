import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExUserComponent } from './ex-user.component';

describe('ExUserComponent', () => {
  let component: ExUserComponent;
  let fixture: ComponentFixture<ExUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExUserComponent]
    });
    fixture = TestBed.createComponent(ExUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
