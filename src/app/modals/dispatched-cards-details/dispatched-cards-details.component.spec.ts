import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchedCardsDetailsComponent } from './dispatched-cards-details.component';

describe('DispatchedCardsDetailsComponent', () => {
  let component: DispatchedCardsDetailsComponent;
  let fixture: ComponentFixture<DispatchedCardsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchedCardsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchedCardsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
