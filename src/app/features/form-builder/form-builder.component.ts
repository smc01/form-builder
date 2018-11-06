import { Component, OnInit } from '@angular/core';
import { CdkDragEnd, moveItemInArray, CdkDragDrop, copyArrayItem } from '@angular/cdk/drag-drop';
import { ModelBase } from 'src/app/modules/shared/components/models/ModelBase';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  constructor() { }

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
      new ModelBase("", "0", "textbox", 0, false, "textBox", false, ""),
      new ModelBase("", "1", "label", 1, false, "label", false, "")
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
}
