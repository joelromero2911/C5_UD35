import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormP2Component } from './form-p2.component';

describe('FormP2Component', () => {
  let component: FormP2Component;
  let fixture: ComponentFixture<FormP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormP2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
