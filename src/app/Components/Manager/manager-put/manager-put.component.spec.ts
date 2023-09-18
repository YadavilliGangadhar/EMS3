import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerPutComponent } from './manager-put.component';

describe('ManagerPutComponent', () => {
  let component: ManagerPutComponent;
  let fixture: ComponentFixture<ManagerPutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerPutComponent]
    });
    fixture = TestBed.createComponent(ManagerPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
