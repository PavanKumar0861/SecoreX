import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdCardIssueDetailComponent } from './id-card-issue-detail.component';

describe('IdCardIssueDetailComponent', () => {
  let component: IdCardIssueDetailComponent;
  let fixture: ComponentFixture<IdCardIssueDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdCardIssueDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdCardIssueDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
