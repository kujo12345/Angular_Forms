import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobReactiveComponent } from './job-reactive.component';

describe('JobReactiveComponent', () => {
  let component: JobReactiveComponent;
  let fixture: ComponentFixture<JobReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
