import { Component, OnInit } from '@angular/core';
import { AIR, Water, Light } from './Static.model';
import { AngularFireDatabase, AngularFireList ,AngularFireObject} from 'angularfire2/database';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-sensor-monitoring',
  templateUrl: './sensor-monitoring.component.html',
  styleUrls: ['./sensor-monitoring.component.css']
})
export class SensorMonitoringComponent implements OnInit {

  airDB: AngularFireObject<any>;
  lightDB: AngularFireObject<any>;
  waterDB: AngularFireObject<any>;
  datas: AngularFireObject<any>;
  air: AIR[] = [];
  light: Light[] = [];
  water: Water[] = [];
  data: any[];

  constructor(private db: AngularFireDatabase) {
    this.airDB = db.object('air');
    this.waterDB = db.object('water');
    this.lightDB = db.object('light');
    this.datas = db.object('data');
  }

  ngOnInit() {



    this.airDB.snapshotChanges().subscribe(action => {
      this.air = action.payload.val();
      console.log(this.air);
    })

    this.waterDB.snapshotChanges().subscribe(action => {
      this.water = action.payload.val();
      console.log(this.water);
    })

    this.lightDB.snapshotChanges().subscribe(action => {
      this.light = action.payload.val();
      console.log(this.light)
    })

    this.datas.snapshotChanges().subscribe(action => {
      this.data = action.payload.val()
      console.log(JSON.stringify(this.data))
    })

  }
}
