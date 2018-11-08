import { NgModule } from "@angular/core";
import { TextBoxComponent } from "./components/text-input/text-box.component";
import { TextInputSettingsComponent } from "./components/text-input/pop-up-settings/text-input-settings.component";
import { MaterialModuleModule } from "src/app/material-module/material-module.module";

import { FormsModule } from '@angular/forms';

@NgModule({
    entryComponents:[TextInputSettingsComponent],
    imports: [MaterialModuleModule, FormsModule],
    declarations: [TextBoxComponent, TextInputSettingsComponent],
    exports: [TextBoxComponent, TextInputSettingsComponent, MaterialModuleModule, FormsModule],
    providers: []

})
export class SharedModule { };