import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { inputCircleComponent } from './input-circle.component';

describe('inputCircleComponent', () => {
  let component: inputCircleComponent;
  let fixture: ComponentFixture<inputCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ inputCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(inputCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
