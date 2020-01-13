import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
declare var require: any;
var ping = require("ping");

declare var $: any;
@Component({
  selector: "app-onprem",
  templateUrl: "./onprem.component.html",
  styleUrls: ["./onprem.component.css"]
})
export class OnpremComponent implements OnInit {
  data: any;
  session: any;

  constructor(private _httpClient: HttpClient) {
    this.data = [
      {
        machineName: "pwdcsv-inspub1",
        machineStatus: "ON"
      },
      {
        machineName: "pwdcsv-insview1",
        machineStatus: "OFF"
      },
      {
        machineName: "pwdcsv-insdb1",
        machineStatus: "ON"
      },
      {
        machineName: "pwdcsv-insview2",
        machineStatus: "OFF"
      },
      {
        machineName: "pwdcsv-inspub2",
        machineStatus: "ON"
      },
      {
        machineName: "pwdcsv-insview3",
        machineStatus: "OFF"
      },
      {
        machineName: "pwdcsv-inspub3",
        machineStatus: "ON"
      },
      {
        machineName: "pwdcsv-insview4",
        machineStatus: "OFF"
      },
      {
        machineName: "pwdcsv-inspub4",
        machineStatus: "ON"
      },
      {
        machineName: "pwdcsv-insview5",
        machineStatus: "OFF"
      },
      {
        machineName: "pwdcsv-inspub5",
        machineStatus: "ON"
      },
      {
        machineName: "pwdcsv-insview6",
        machineStatus: "OFF"
      },
      {
        machineName: "pwdcsv-inspub6",
        machineStatus: "ON"
      },
      {
        machineName: "pwdcsv-insview7",
        machineStatus: "OFF"
      },
      {
        machineName: "pwdcsv-inspub7",
        machineStatus: "ON"
      },
      {
        machineName: "pwdcsv-insview8",
        machineStatus: "OFF"
      },
      {
        machineName: "pwdcsv-inspub8",
        machineStatus: "ON"
      },
      {
        machineName: "pwdcsv-insview9",
        machineStatus: "OFF"
      },
      {
        machineName: "pwdcsv-inspub9",
        machineStatus: "ON"
      },
      {
        machineName: "pwdcsv-insview10",
        machineStatus: "OFF"
      }
    ];
  }

  ngOnInit() {}

  showModal(): void {
    $("#myModal").modal("show");
  }

  testApi() {
    const ip = "127.0.0.1";
    this._httpClient
      .get(
        "http://localhost:8083/HarwareManagerServer/rest/GetExampleService/machine/" +
          ip
      )
      .subscribe(res => {
        console.log(res);
      });
  }
}
