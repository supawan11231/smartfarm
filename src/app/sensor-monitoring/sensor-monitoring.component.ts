import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-sensor-monitoring',
  templateUrl: './sensor-monitoring.component.html',
  styleUrls: ['./sensor-monitoring.component.css']
})
export class SensorMonitoringComponent implements OnInit {
 airGasList: AngularFireList<any>;
 airGas: number[];
 airHumList: AngularFireList<any>;
 airHum: number[];
 airTempList: AngularFireList<any>;
 airTemp: any[];
 waterFlowList: AngularFireList<any>;
 waterFlow: number[];
 waterTempList: AngularFireList<any>;
 waterTemp: number[];
 lightLuxList: AngularFireList<any>;
 lightLux:number[];
air:any[];
  constructor(private db: AngularFireDatabase) {
    this.airGasList = db.list('air/gas');
    this.airHumList = db.list('air/hum');
    this.airTempList = db.list('air/temp');
    this.waterFlowList = db.list('water/flow');
    this.waterTempList = db.list('water/temp');
    this.lightLuxList = db.list('light/lux');
  }

  ngOnInit() {
    this.airGasList.snapshotChanges().pipe(
      map(actions => {
        console.log(this.airGasList);
        return actions.map(a => (a.payload.val()))
      })
    ).subscribe(items => {
      this.airGas = items;
      console.log(this.airGas);
    });

    console.log(this.db.list('data').snapshotChanges())
  
 

    this.airHumList.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => (a.payload.val()))
      })
    ).subscribe(items => {
      this.airHum = items;
      console.log(this.airHum);
    });


    this.airTempList.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => (a.payload.val()))
      })
    ).subscribe(items => {
      this.airTemp = items;
    });
    this.waterFlowList.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => (a.payload.val()))
      })
    ).subscribe(items => {
      this.waterFlow = items;
    });
    this.waterTempList.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => (a.payload.val()))
      })
    ).subscribe(items => {
      this.waterTemp = items;
    });
    this.lightLuxList.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => (a.payload.val()))
      })
    ).subscribe(items => {
      this.lightLux = items;
    });
   }

}
