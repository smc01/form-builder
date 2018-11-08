import { NgModule } from "@angular/core";
import { FormBuilderComponent } from "./form-builder/form-builder.component";
import { MaterialModuleModule } from "../material-module/material-module.module";
import { SharedModule } from "../modules/shared/shared.module";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  
    declarations: [
      FormBuilderComponent
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MaterialModuleModule, 
      SharedModule
    ],
    providers: [],
    bootstrap: []
  })
  export class FeaturesModule { }