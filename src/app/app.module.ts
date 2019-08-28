import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { SensorMonitoringComponent } from './sensor-monitoring/sensor-monitoring.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeModule } from './home/home.module';
import { AboutUsModule } from './about-us/about-us.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SensorMonitoringModule } from './sensor-monitoring/sensor-monitoring.module';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig} from '../environments/firebase.config';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { from } from 'rxjs';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    HomeModule,
    AboutUsModule,
    DashboardModule,
    SensorMonitoringModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule {}
