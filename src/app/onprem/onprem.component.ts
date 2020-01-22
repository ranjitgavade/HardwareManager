import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SERVICE_URL } from "../constants/service.constant";
import { MachineModel } from "../models/machine.model";
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

  machineDetail = null;

  constructor(private _httpClient: HttpClient) {}

  ngOnInit() {
    this.getMachineList();
  }

  getMachineList() {
    this._httpClient
      .get(SERVICE_URL.get_machine)
      .subscribe((res: MachineModel[]) => {
        this.data = res;
      });
  }

  showModal(row: any): void {
    $("#myModal").modal("show");
    this.machineDetail = JSON.parse(JSON.stringify(row));
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
