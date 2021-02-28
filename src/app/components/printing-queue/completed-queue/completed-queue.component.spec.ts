import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedQueueComponent } from './completed-queue.component';

describe('CompletedQueueComponent', () => {
  let component: CompletedQueueComponent;
  let fixture: ComponentFixture<CompletedQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
