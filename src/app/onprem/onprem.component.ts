import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-onprem',
  templateUrl: './onprem.component.html',
  styleUrls: ['./onprem.component.css']
})
export class OnpremComponent implements OnInit {
data:any;


  constructor() {
    this.data=[
      {
        "machineName": "dattaram Gawas",
        "machineStatus": "ON"
      },
      {
        "machineName": "Sudarshan Hiray",
        "machineStatus": "OFF"
      },
      {
        "machineName": "dattaram Gawas",
        "machineStatus": "ON"
      },
      {
        "machineName": "Sudarshan Hiray",
        "machineStatus": "OFF"
      },
      {
        "machineName": "dattaram Gawas",
        "machineStatus": "ON"
      },
      {
        "machineName": "Sudarshan Hiray",
        "machineStatus": "OFF"
      },
      {
        "machineName": "dattaram Gawas",
        "machineStatus": "ON"
      },
      {
        "machineName": "Sudarshan Hiray",
        "machineStatus": "OFF"
      },
      {
        "machineName": "dattaram Gawas",
        "machineStatus": "ON"
      },
      {
        "machineName": "Sudarshan Hiray",
        "machineStatus": "OFF"
      },
      {
        "machineName": "dattaram Gawas",
        "machineStatus": "ON"
      },
      {
        "machineName": "Sudarshan Hiray",
        "machineStatus": "OFF"
      },
      {
        "machineName": "dattaram Gawas",
        "machineStatus": "ON"
      },
      {
        "machineName": "Sudarshan Hiray",
        "machineStatus": "OFF"
      },
      {
        "machineName": "dattaram Gawas",
        "machineStatus": "ON"
      },
      {
        "machineName": "Sudarshan Hiray",
        "machineStatus": "OFF"
      },
      {
        "machineName": "dattaram Gawas",
        "machineStatus": "ON"
      },
      {
        "machineName": "Sudarshan Hiray",
        "machineStatus": "OFF"
      },
      {
        "machineName": "dattaram Gawas",
        "machineStatus": "ON"
      },
      {
        "machineName": "Sudarshan Hiray",
        "machineStatus": "OFF"
      }
    ]
   }

  ngOnInit() {
   
  }

  showModal():void {
    $("#myModal").modal('show');
  }
}
