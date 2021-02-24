import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintStatusComponent } from './print-status.component';

describe('PrintStatusComponent', () => {
  let component: PrintStatusComponent;
  let fixture: ComponentFixture<PrintStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
