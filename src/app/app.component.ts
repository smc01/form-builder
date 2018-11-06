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


  
}
