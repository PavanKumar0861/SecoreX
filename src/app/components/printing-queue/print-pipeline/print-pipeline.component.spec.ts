import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintPipelineComponent } from './print-pipeline.component';

describe('PrintPipelineComponent', () => {
  let component: PrintPipelineComponent;
  let fixture: ComponentFixture<PrintPipelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintPipelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintPipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
