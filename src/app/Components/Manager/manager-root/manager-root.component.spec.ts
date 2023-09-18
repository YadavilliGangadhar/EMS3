import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerRootComponent } from './manager-root.component';

describe('ManagerRootComponent', () => {
  let component: ManagerRootComponent;
  let fixture: ComponentFixture<ManagerRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerRootComponent]
    });
    fixture = TestBed.createComponent(ManagerRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
