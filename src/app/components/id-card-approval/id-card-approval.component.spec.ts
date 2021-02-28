import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdCardApprovalComponent } from './id-card-approval.component';

describe('IdCardApprovalComponent', () => {
  let component: IdCardApprovalComponent;
  let fixture: ComponentFixture<IdCardApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdCardApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdCardApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
