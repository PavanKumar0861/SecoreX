import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdCardApproveComponent } from './id-card-approve.component';

describe('IdCardApproveComponent', () => {
  let component: IdCardApproveComponent;
  let fixture: ComponentFixture<IdCardApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdCardApproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdCardApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
