import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home.module';
import { SensorMonitoringComponent } from '../sensor-monitoring/sensor-monitoring.component';

const routes: Routes = [
  {
    path:'',
    component: SensorMonitoringComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
