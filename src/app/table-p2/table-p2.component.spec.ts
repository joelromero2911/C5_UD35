import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableP2Component } from './table-p2.component';

describe('TableP2Component', () => {
  let component: TableP2Component;
  let fixture: ComponentFixture<TableP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableP2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
