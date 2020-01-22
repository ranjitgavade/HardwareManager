import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MachineModel } from "src/app/models/machine.model";

declare var $: any;
@Component({
  selector: "machine-form",
  templateUrl: "./machine-form.component.html"
})
export class MachineFormComponent implements OnInit {
  @Input() data: MachineModel;

  ngOnInit(): void {}
}
