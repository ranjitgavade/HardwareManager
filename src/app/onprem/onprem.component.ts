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
        this.checkAllMachineStatus();
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
      this.getMachineList();
      $("#myModal").modal("hide");
    })
  }

  createMachinedetailsHandle(){
    this._httpClient.post(SERVICE_URL.post_create_machine_details,this.machineDetail).subscribe(res=>{
      console.log("created");
      this.getMachineList();
      $("#myModal").modal("hide");


    })
  }

  checkAllMachineStatus() {
    if(this.data.length > 0){
      this.data.forEach((machine:MachineModel) => {
       this.getMachineStatus(machine);            
      });

    }
  }

  async getMachineStatus(row: MachineModel) {
   const result: any =  await this._httpClient.get(SERVICE_URL.get_machine_status + row.machineName).toPromise();
   row.status = result.status;

  }
}
