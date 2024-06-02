import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeDataComponent } from './resume-data.component';

describe('ResumeDataComponent', () => {
  let component: ResumeDataComponent;
  let fixture: ComponentFixture<ResumeDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeDataComponent]
    });
    fixture = TestBed.createComponent(ResumeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
