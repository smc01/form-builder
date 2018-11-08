import { Component, OnInit, Input } from '@angular/core';
import { TextInputSettingsComponent } from './pop-up-settings/text-input-settings.component';
import { MatDialog } from '@angular/material';
import { ModelBase } from '../models/ModelBase';
import { TextboxModel } from './models/TextboxModel';

@Component({
  selector: 'text-input',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit {
  @Input() inputModel: TextboxModel;
  
  constructor(public dialog: MatDialog) {}
  ngOnInit() {

  }  
}
