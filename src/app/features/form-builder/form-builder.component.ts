import { Component, OnInit } from '@angular/core';
import { CdkDragEnd, moveItemInArray, CdkDragDrop, copyArrayItem } from '@angular/cdk/drag-drop';
import { ModelBase } from 'src/app/modules/shared/components/models/ModelBase';
import { AppComponentTypes } from 'src/app/core/globals';
import { MatDialog } from '@angular/material';

import { MatNativeDateModule } from '@angular/material';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MAT_DIALOG_DATA } from '@angular/material';
import { TextInputSettingsComponent } from 'src/app/modules/shared/components/text-input/pop-up-settings/text-input-settings.component';
import { TextboxModel } from 'src/app/modules/shared/components/text-input/models/TextboxModel';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
  providers: [AppComponentTypes]

})
export class FormBuilderComponent implements OnInit {

  constructor(private appComponentTypes: AppComponentTypes, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadComponents();

    this.formComponents = [];
  }

  formComponents: any[];
  availableComponents: any[];

  destinationListName: string[] = ["destinationList"];
  sourceListName: string[] = ["sourceList"];

  loadComponents(): any {
    this.availableComponents = [
      new TextboxModel("", "textBox1", 0, false, this.appComponentTypes.textBox, false,[""],"description","placeholder", "validationMessage", "validationRule", 100)   
    ];
  }

  drop(event: CdkDragDrop<ModelBase[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  ended(event: CdkDragEnd) {
    console.log("end to move item");
  }

  onClickMe(index) {
    if (index > -1) {
      this.formComponents.splice(index, 1);
    }
  }



  onSettingsClicked(index) {

    var temp = this.formComponents[index];

    let settings = {
      key: "1",
      id: "1",
      componentType: "setting",
      index: 1,
      editable: false,
      label: "string",
      required: false,
      value: "no value",
      description: "description",
      placeholder: "placeholder",
      validationMessage: "validationMessage",
      validationRule: "validationRule",
      charactersLimit: 1
    };



    const dialogRef = this.dialog.open(TextInputSettingsComponent, {
      data: settings
    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log(result.label);

            this.formComponents[index] = new ModelBase("", "0", this.appComponentTypes.textBox, index, false, result.label, false, "");
            

    });
  }
}
