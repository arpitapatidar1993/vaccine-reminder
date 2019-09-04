import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlreadyRegisterComponent } from './already-register.component';

describe('AlreadyRegisterComponent', () => {
  let component: AlreadyRegisterComponent;
  let fixture: ComponentFixture<AlreadyRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlreadyRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlreadyRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
