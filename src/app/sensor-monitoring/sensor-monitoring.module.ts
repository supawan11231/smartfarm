import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SensorMonitoringRoutingModule } from './sensor-monitoring-routing.module';
import { SensorMonitoringComponent } from './sensor-monitoring.component';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { AngularMaterialModule } from 'src/app/angular-material.module';

@NgModule({
  declarations: [SensorMonitoringComponent],
  imports: [
    CommonModule,
    SensorMonitoringRoutingModule,
    MatToolbarModule,
    AngularMaterialModule
  ]
})
export class SensorMonitoringModule { }
