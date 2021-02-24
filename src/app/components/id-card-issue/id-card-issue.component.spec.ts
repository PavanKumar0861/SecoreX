import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdCardIssueComponent } from './id-card-issue.component';

describe('IdCardIssueComponent', () => {
  let component: IdCardIssueComponent;
  let fixture: ComponentFixture<IdCardIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdCardIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdCardIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
