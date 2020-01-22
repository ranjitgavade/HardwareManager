import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SERVICE_URL } from "../constants/service.constant";
import { MachineModel } from "../models/machine.model";

declare var $: any;
@Component({
  selector: "app-onprem",
  templateUrl: "./onprem.component.html",
  styleUrls: ["./onprem.component.css"]
})
export class OnpremComponent implements OnInit {
  data: any;
  session: any;

  isUpdateMode = false;

  machineDetail : MachineModel;

  constructor(private _httpClient: HttpClient) {}

  ngOnInit() {
    this.machineDetail=new MachineModel();
    this.getMachineList();
  }

  getMachineList() {
    this._httpClient
      .get(SERVICE_URL.get_machine)
      .subscribe((res: MachineModel[]) => {
        this.data = res;
      });
  }

  addMachineHandle() {
    $("#myModal").modal("show");
    this.isUpdateMode = false;
    this.machineDetail = new MachineModel();
  }

  showModal(row: any): void {
    $("#myModal").modal("show");
    this.isUpdateMode = true;
    this.machineDetail = JSON.parse(JSON.stringify(row));
  }


  updateMachinedetailsHandle(){
    this._httpClient.post(SERVICE_URL.post_update_machine_details,this.machineDetail).subscribe(res=>{
      console.log("updated");
    })
  }

  createMachinedetailsHandle(){
    this._httpClient.post(SERVICE_URL.post_create_machine_details,this.machineDetail).subscribe(res=>{
      console.log("created");
    })
  }
}
