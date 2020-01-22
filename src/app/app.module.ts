import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { OnpremComponent } from "./onprem/onprem.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app.router.module";
import { DDatatableModule } from "d-datatable";
import { MachineFormComponent } from "./onprem/machine-form/machine-form.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    OnpremComponent,
    HomeComponent,
    MachineFormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, DDatatableModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
