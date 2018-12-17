import { NgModule } from "@angular/core";
import { TextBoxComponent } from "./components/text-input/text-box.component";
import { TextInputSettingsComponent } from "./components/text-input/pop-up-settings/text-input-settings.component";
import { MaterialModuleModule } from "src/app/material-module/material-module.module";

import { FormsModule } from '@angular/forms';

import { LabelComponent } from "./components/label/label.component";
import { LabelSettingsComponent } from "./components/label/label-settings/label-settings.component";

@NgModule({
    entryComponents:[TextInputSettingsComponent, LabelSettingsComponent],
    imports: [MaterialModuleModule, FormsModule],
    declarations: [TextBoxComponent, TextInputSettingsComponent, LabelComponent, LabelSettingsComponent],
    exports: [TextBoxComponent, TextInputSettingsComponent, LabelComponent, LabelSettingsComponent, MaterialModuleModule, FormsModule],
    providers: []

})
export class SharedModule { };