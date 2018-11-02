import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem, CdkDragEnter, CdkDragExit, CdkDragEnd } from '@angular/cdk/drag-drop';
import { BaseComponent } from './base-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form-builder';
  formComponents = [ ];

  private _destinationList: BaseComponent[] = [];
  public get destinationList(): BaseComponent[] {
    return this._destinationList;
  }
  public set destinationList(value: BaseComponent[]) {
    this._destinationList = value;
  }


  private _targetList: BaseComponent[] = [
    new BaseComponent(1, "TextBox"),
    new BaseComponent(2, "TextArea"),
    new BaseComponent(3, "Image"),
    new BaseComponent(4, "File")
  ];
  public get targetList(): BaseComponent[] {
    return this._targetList;
  }
  public set targetList(value: BaseComponent[]) {
    this._targetList = value;
  }


  drop(event: CdkDragDrop<BaseComponent[]>) {
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
      this._destinationList.splice(index, 1);
    }
  }
}
