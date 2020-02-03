import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresWiseAnalyticsComponent } from './genres-wise-analytics.component';

describe('GenresWiseAnalyticsComponent', () => {
  let component: GenresWiseAnalyticsComponent;
  let fixture: ComponentFixture<GenresWiseAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenresWiseAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenresWiseAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
