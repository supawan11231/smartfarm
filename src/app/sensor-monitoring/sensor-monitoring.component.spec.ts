import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorMonitoringComponent } from './sensor-monitoring.component';

describe('SensorMonitoringComponent', () => {
  let component: SensorMonitoringComponent;
  let fixture: ComponentFixture<SensorMonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorMonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
