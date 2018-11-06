import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModelBase } from '../models/ModelBase';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'components-list',
  templateUrl: './components-list.component.html',
  styleUrls: ['./components-list.component.scss']
})
export class ComponentsListComponent implements OnInit {

  @Input() modelsList: ModelBase[] = [];
  @Input() connectedTo: string[];
  @Output() cdkDropListDropped = new EventEmitter();

 
  constructor() { };

  ngOnInit() {
  };

  dropChild(event: CdkDragDrop<ModelBase[]>) {
    this.cdkDropListDropped.emit(event);
  };
}
