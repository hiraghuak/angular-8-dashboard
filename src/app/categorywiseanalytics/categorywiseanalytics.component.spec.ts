import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorywiseanalyticsComponent } from './categorywiseanalytics.component';

describe('CategorywiseanalyticsComponent', () => {
  let component: CategorywiseanalyticsComponent;
  let fixture: ComponentFixture<CategorywiseanalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorywiseanalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorywiseanalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
