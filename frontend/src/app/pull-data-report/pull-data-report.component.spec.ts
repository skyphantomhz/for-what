import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PullDataReportComponent } from './pull-data-report.component';

describe('PullDataReportComponent', () => {
  let component: PullDataReportComponent;
  let fixture: ComponentFixture<PullDataReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PullDataReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PullDataReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
