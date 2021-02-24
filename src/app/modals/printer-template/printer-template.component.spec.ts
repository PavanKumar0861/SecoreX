import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterTemplateComponent } from './printer-template.component';

describe('PrinterTemplateComponent', () => {
  let component: PrinterTemplateComponent;
  let fixture: ComponentFixture<PrinterTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinterTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinterTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
