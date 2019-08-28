import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SensorMonitoringComponent } from './sensor-monitoring/sensor-monitoring.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {
    path:'',
    // loadChildren:'./home/home.module#HomeModule'
    component: HomeComponent
  },
  {
    path:'Dashboard',
    // loadChildren:'./dashboard/dashboard.module#DashboardModule'
    component: DashboardComponent
  },
  {
    path:'SensorMonitoring',
    // loadChildren:'./sensor-monitoring/sensor-monitoring.module#SensorMonitoringModule'
    component: SensorMonitoringComponent
  },
  {
    path:'AboutUs',
    // loadChildren:'./about-us/about-us.module#AboutUsModule'
    component: AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
